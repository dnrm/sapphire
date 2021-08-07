import { S3 } from 'aws-sdk';

const s3 = new S3();
export default function handler(req, res) {
    s3.listObjectsV2(
        {
            Bucket: process.env.S3_BUCKET,
            Prefix: 's/'
        },
        (err, data) => {
            if (err)
                return res.status(500).send({
                    message: 'Error getting objects',
                });

            let urls = [];

            data['Contents'].forEach((i) => {
                const url = s3.getSignedUrl('getObject', {
                    Bucket: process.env.S3_BUCKET,
                    Key: i.Key,
                });
                urls.push(url);
            });

            return res.status(200).send(urls);
        }
    );
}
