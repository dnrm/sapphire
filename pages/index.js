import { Grid, Divider } from "@chakra-ui/react"
import Photo from '../components/Photo'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Divider mb="8"  />
      <Grid px={8} templateColumns="repeat(4, 1fr)" gap="2" width="full">
        <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
        <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
        <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
        <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
        <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
        <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
        <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
        <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
        <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
        <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
        <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
        <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
        <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
        <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
        <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
        <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
        <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
        <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
        <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
        <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
        <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
        <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
        <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
        <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
      </Grid>
    </>
  )
}
