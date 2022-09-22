import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast';
import { SignInPageWrapper, LoginForm, Input, Button, Label, Info } from '../styles/SignIn.style'
import Logo from '../components/Logo';
import Layout from '../components/Layout/Main'
import useAuth from '../hooks/useAuth';
import axios from '../utils/axios/axios';
import { IUser } from '../context/AuthContext';

const Login: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const { setUserInfo } = useAuth()
  const router = useRouter();


  const handleOnSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    setIsLoading(true)
    const data = {
      username,
      password
    }
    try {
      const res = await axios.post(`/v1/user/login`, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
      if (res.status != 200) throw Error("BAD STATUS")
      const user: IUser = {
        user: res?.data?.user || null,
        accessToken: res?.data?.access_token || null
      }
      setUserInfo(user)
      toast.success("Successfully login")
      router.push("/")
    } catch (error) {
      toast.error("Fail to login. Wrong username or password.")
    } finally {
      setIsLoading(false)
      setUsername("")
      setPassword("")
    }
  }

  return (
    <Layout type='Login'>
      <SignInPageWrapper>
        <LoginForm onSubmit={handleOnSubmit}>
          <Logo size={45} fontSize={'3xl'} />
          <Label>Login</Label>
          <Input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <Input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" disabled={isLoading}>Login</Button>
          <Info>
            <div>Don't have account yet?</div>
            <a href='/signup'>sign up</a>
          </Info>
        </LoginForm>
      </SignInPageWrapper>
    </Layout>
  )
}

export default Login
