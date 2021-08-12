import { S3 } from 'aws-sdk'

const s3 = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_DNRM,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_DNRM,
    signatureVersion: 'v4'
});
export default async function handler(req, res) {
    console.log(req.body)
    s3.createPresignedPost({
        Bucket: process.env.BUCKET,
        Fields: {
            key: req.body.file
        },
        Expires: 60
    }, (err, data) => {
        if (err) {
            console.log(err)
            return res.status(500).send({
                error: err
            })
        }

        console.log(data)
        return res.status(200).send(data)
    })
}