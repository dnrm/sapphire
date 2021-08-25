import { S3 } from 'aws-sdk';
import { S3Customizations } from 'aws-sdk/lib/services/s3';
import { getSession } from 'next-auth/client';

const s3 = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_DNRM,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_DNRM,
});

export default async function handler(req, res) {
    const session = await getSession({ req });
    if (!session) {
        return res.status(403).send({
            message: 'Unauthorised, please sign in.',
        });
    }

    console.log(req.body);
    if (!req.body.key) {
        return res.status(404).send({
            message: 'Photo not found',
        });
    }

    try {
        const url = await s3.getSignedUrl('getObject', {
            Bucket: process.env.S3_BUCKET,
            Key: req.body.key,
        });
        res.status(200).send({
            url,
        });
    } catch (e) {
        res.status(500).send({
            message: e,
        });
    }
}
