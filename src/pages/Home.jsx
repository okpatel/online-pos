// src/pages/Home.jsx

import React from 'react'
import {Link} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
        <div className='bg-light p-5 mt-4 rounded-3'>
            <h1>Welcome to the simple POS for small buiness to Some changes</h1>
            <p>Labore tempor ipsum duis ea exercitation laboris laborum mollit qui exercitation.</p>
            <p>If you have an issue, call 443-444-xxxx anytimes</p>
            <Link to='/pos' className='btn btn-primary'>Click here to sell products</Link>
        </div>
    </MainLayout>
  )
}
