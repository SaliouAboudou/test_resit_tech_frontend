import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {

    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password
      })

      const token = response.data.token // ou access_token selon ton API
      localStorage.setItem('token', token)
      alert('Connexion réussie !')
      navigate('/tache')
      // Redirige ou fais autre chose ici
    } catch (err) {
      console.error(err)
      setError("Identifiants incorrects")
    }
  }

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-3'>
      <h2 className='text-lg text-zinc-800'>Connexion</h2>
      <div className='w-full max-w-xs border border-zinc-200 px-4 py-6 rounded-md shadow bg-zinc-50'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2.5'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email">E-mail ou Nom utilisateur</label>
              <input
                type="email"
                name='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full rounded-md border border-zinc-200 focus:ring-2 focus:ring-zinc-200'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                name='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full rounded-md border border-zinc-200 focus:ring-2 focus:ring-zinc-200'
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className='w-full flex flex-col gap-1 justify-center'>
              <button
                type='submit'
                className='w-full bg-zinc-600 text-lg flex justify-center rounded-md text-white text-center py-2.5 cursor-pointer hover:bg-zinc-700 focus:ring-4 focus:ring-zinc-200 focus:ring-offset-1'
              >
                Connexion
              </button>
              <Link  to='/register'>S'inscrire</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
