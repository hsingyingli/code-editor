import { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast';
import Layout from '../components/Layout/Main'
import Avatar from '../components/Avatar';
import { ProfileWrapper, InputField, Button, ProfileField } from '../styles/Profile.style'



//interface Props {
//user: User,
//accessToken: string
//}

interface UserData {
  username: string,
  website: string,
  avatar_url: string,
}



const Profile: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const [firstLoading, setFirstLoading] = useState(true)
  const [username, setUsername] = useState("")
  const [website, setWebsite] = useState("")
  const [avatar_url, setAvatarUrl] = useState("")
  const router = useRouter();



  return (
    <Layout type='profile' nav={true}>
      <ProfileWrapper>
        {firstLoading ? <div>Loading...</div> :
          <ProfileField>
            <Avatar
              url={avatar_url}
              onUpload={(url) => {
                setAvatarUrl(url)
              }} />
            <InputField>
              <label htmlFor="email">Email</label>
              <input id="email" type="text" value={"email"} disabled />
            </InputField>
            <InputField>
              <label htmlFor="username">Name</label>
              <input
                id="username"
                type="text"
                value={username || ''}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputField>
            <InputField>
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="website"
                value={website || ''}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </InputField>
            <Button
              disabled={loading}
            //onClick={() => updateProfile({ username, website, avatar_url })}
            >
              {!loading ? 'Loading ...' : 'Update'}
            </Button>

            <Button
            //onClick={handleLogout}
            >
              Sign Out
            </Button>
          </ProfileField>
        }
      </ProfileWrapper>
    </Layout>
  )
}

export default Profile
