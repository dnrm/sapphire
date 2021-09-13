import { getSession } from 'next-auth/client'
import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name: 'dnrm',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

export default async function handler(req, res) {
    const session = await getSession({ req });
    if (!session) {
        res.status(403).send({ message: 'unauthorised' })
    }

    // const photo = cloudinary.v2.search.expression(
    //     'resource_type:image OR resource_type:video'
    // ).sort_by('public_id', 'desc').execute().then(r => console.log(r))

    res.send(200)

}
