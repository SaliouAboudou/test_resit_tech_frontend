import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    try {
      const response = await axios.post('http://localhost:8000/api/register', formData)

      setSuccess("Inscription réussie !")
      console.log(response.data)

      // éventuellement rediriger ou stocker le token
      localStorage.setItem('token', response.data.token)

    } catch (err) {
      console.error(err)
      setError("Erreur lors de l'inscription.")
    }
  }

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-3'>
      <h2 className='text-lg text-zinc-800'>Register</h2>
      <div className='w-full max-w-xs border border-zinc-200 px-4 py-6 rounded-md shadow bg-zinc-50'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2.5'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name">Nom utilisateur</label>
              <input
                type="text"
                name='name'
                id='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full rounded-md border border-zinc-200 focus:ring-2 focus:ring-zinc-200'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name='email'
                id='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full rounded-md border border-zinc-200 focus:ring-2 focus:ring-zinc-200'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                name='password'
                id='password'
                value={formData.password}
                onChange={handleChange}
                className='w-full rounded-md border border-zinc-200 focus:ring-2 focus:ring-zinc-200'
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">{success}</p>}

            <div className='w-full flex flex-col gap-1 justify-center'>
              <button
                type='submit'
                className='w-full bg-zinc-600 text-lg flex justify-center rounded-md text-white text-center py-2.5 cursor-pointer hover:bg-zinc-700 focus:ring-4 focus:ring-zinc-200 focus:ring-offset-1'
              >
                S'inscrire
              </button>
            </div>
          </div>
          
          <Link  to='/'>Se connecter</Link>
        </form>
      </div>
    </div>
  )
}

