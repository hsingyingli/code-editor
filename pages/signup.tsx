import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast';
import { SignInPageWrapper, LoginForm, Input, Button, Label } from '../styles/SignIn.style'
import Logo from '../components/Logo';
import Layout from '../components/Layout/Main'

const SignIn: NextPage = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();


  const handleOnSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (!email) {
      toast.error('Room id & username is required');
      return
    }
    const toastId = toast.loading('Loading...');

    setEmail("")
    toast.success('Magic Link is sent to your email. Please checkout your email', { id: toastId });
  }

  return (
    <Layout type='Sign up'>
      <SignInPageWrapper>
        <LoginForm onSubmit={handleOnSubmit}>
          <Logo size={45} fontSize={'3xl'} />
          <Label>Sign up with Email</Label>
          <Input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <Button type="submit">Login</Button>
        </LoginForm>
      </SignInPageWrapper>
    </Layout>
  )
}

export default SignIn
