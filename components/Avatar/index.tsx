import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import toast from 'react-hot-toast'

import { InputField, ImageWrapper } from './style'



type OnUpload = (url: string) => void;

interface Props {
  url: string,
  onUpload: OnUpload
}


const Avatar: React.FC<Props> = ({ url, onUpload }) => {
  const [avatarUrl, setAvatarUrl] = useState("")
  const [uploading, setUploading] = useState(false)

  //useEffect(() => {
  //if (url) downloadImage(url)
  //}, [url])

  //const downloadImage = async (path: string) => {
  //try {
  //const { data, error } = await supabaseClient.storage
  //.from('avatars')
  //.download(path)
  //if (error) {
  //throw error
  //}
  //const url = URL.createObjectURL(data as Blob)
  //setAvatarUrl(url)
  //} catch (error) {
  //toast.error('Avatar download fail!')
  //}
  //}

  //const uploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //try {
  //setUploading(true)

  //if (!event.target.files || event.target.files.length === 0) {
  //throw new Error('You must select an image to upload.')
  //}

  //const file = event.target.files[0]
  //const fileExt = file.name.split('.').pop()
  //const fileName = `${Math.random()}.${fileExt}`
  //const filePath = `${fileName}`

  //let { error: uploadError } = await supabaseClient.storage
  //.from('avatars')
  //.upload(filePath, file)

  //if (uploadError) {
  //throw uploadError
  //}

  //onUpload(filePath)
  //} catch (error) {
  //toast.error('Something went wrong, please try later.')
  //} finally {
  //setUploading(false)
  //}
  //}

  return (
    <>
      <ImageWrapper>
        {avatarUrl ? <Image
          id='avatar-img'
          src={avatarUrl}
          alt="Avatar"
          layout="responsive"
          width={1}
          height={1}
        /> :
          <p>No image to display</p>
        }
      </ImageWrapper>
      <InputField>
        <label htmlFor="single">
          {uploading ? 'Uploading ...' : 'Upload Image'}
        </label>
        <input
          type="file"
          id="single"
          accept="image/*"
          //onChange={uploadAvatar}
          disabled={uploading}
        />
      </InputField>
    </>
  )
}

export default Avatar
