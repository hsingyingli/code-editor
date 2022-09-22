import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast';
import { SignInPageWrapper, LoginForm, Input, Button, Label } from '../styles/SignIn.style'
import Logo from '../components/Logo';
import Layout from '../components/Layout/Main'

const SignIn: NextPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleOnSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
  }

  return (
    <Layout type='Sign up'>
      <SignInPageWrapper>
        <LoginForm onSubmit={handleOnSubmit}>
          <Logo size={45} fontSize={'3xl'} />
          <Label>Sign Up</Label>
          <Input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <Input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <Input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit">SignUp</Button>
        </LoginForm>
      </SignInPageWrapper>
    </Layout>
  )
}

export default SignIn
