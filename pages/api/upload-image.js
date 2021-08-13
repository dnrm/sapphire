import { S3 } from 'aws-sdk';
import { getSession } from 'next-auth/client';

const s3 = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_DNRM,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_DNRM,
    signatureVersion: 'v4',
});

const unauthorisedMessages = [
    'Are you dani or sofi? (403)',
    'omg nou you are not authorised to call this routeeeee',
    "lol u can't do this ur not logged in ",
    'log in plsplsplsplsplspls',
    ':0 a criminal omg',
    "im sorry but you can't access this :c",
    'Only authorised personnel <3',
    "We love you but don't give you permission to view this content",
    'lol u really thought',
    'omg noooooo 403!!111!!1111',
    'hehe ur not allowed >:)',
    'Unauthorised, please log in <3',
];

export default async function handler(req, res) {
    const session = await getSession({ req });
    if (!session) {
        return res.status(403).send({
            message: unauthorisedMessages[Math.floor(Math.random(0, unauthorisedMessages.length))],
        });
    }

    console.log(req.body);
    s3.createPresignedPost(
        {
            Bucket: process.env.TEMP_BUCKET,
            Fields: {
                key: req.body.file,
            },
            Expires: 60,
        },
        (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send({
                    error: err,
                });
            }

            console.log(data);
            return res.status(200).send(data);
        }
    );
}
