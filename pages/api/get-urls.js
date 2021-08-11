import { S3 } from 'aws-sdk';

const s3 = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_DNRM,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_DNRM,
});

export default function handler(req, res) {
    console.log('start');
    s3.listObjectsV2(
        {
            Bucket: process.env.S3_BUCKET,
            Prefix: process.env.S3_PREFIX || null,
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
