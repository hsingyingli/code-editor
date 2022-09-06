import React, { useState} from 'react'
import { GetServerSideProps } from 'next'
import type { NextPage } from 'next'
import { FaCode } from "react-icons/fa";
import toast from 'react-hot-toast';

import {supabaseClient} from '@supabase/auth-helpers-nextjs'
import supabase from '../utils/supabase/client';

import { SignInPageWrapper, LoginForm, Logo, Input, Button, Label } from '../styles/SignIn.style'
import Layout from '../components/Layout/Main'

const SignIn: NextPage = () => {
  const [email, setEmail] = useState("");

  const handleOnSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (!email) {
      toast.error('Room id & username is required');
      return
    }
    const toastId = toast.loading('Loading...');
    const {  error } = await supabaseClient.auth.signIn({
        email,
      })
    
    setEmail("")
    if (error) {
      toast.error('Something went wrong. Please try later', {id: toastId});
      return 
    }
    toast.success('Magic Link is sent to your email. Please checkout your email', {id: toastId});
  }


  return (
    <Layout type='Sign in'>
      <SignInPageWrapper>
        <LoginForm onSubmit={handleOnSubmit}>
          <Logo>
            <FaCode size={45} className='logo' />
            Code editor
          </Logo>
          <Label>Login with Email</Label>
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



export const getServerSideProps: GetServerSideProps = async ({req}) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (user) {
    return {
        redirect: {
          permanent: false,
          destination: "/",
        },
        props:{},
      };
  }

  return {
      props: {}
    }
}
