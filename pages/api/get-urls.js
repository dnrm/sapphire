import { S3 } from 'aws-sdk';
import { getSession } from 'next-auth/client'

const s3 = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_DNRM,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_DNRM,
});

export default async function handler(req, res) {

    const session = await getSession();
    if (!session) {
        return res.status(403).send({
            message: 'Unauthorised, please sign in.'
        })
    }

    console.log('start');
    s3.listObjectsV2(
        {
            Bucket: process.env.S3_BUCKET,
        },
        (err, data) => {
            console.log('err or data');
            if (err) {
                console.log(err);
                return res.status(500).send({
                    message: 'Error getting objects',
                });
            }

            let urls = [];

            data['Contents'].forEach((i) => {
                const url = s3.getSignedUrl('getObject', {
                    Bucket: process.env.S3_BUCKET,
                    Key: i.Key,
                });
                urls.push({
                    Key: i.Key,
                    URL: url,
                });
            });

            if (urls === []) {
                res.status(404).send({
                    message: 'No images',
                });
            }

            return res.status(200).send(urls);
        }
    );
}
