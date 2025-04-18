import React from 'react'

export const Login = () => {
  return (
    <div className=' w-full h-screen flex flex-col justify-center items-center gap-3'>
    <h2 className=' text-lg text-zinc-800'>Connexion</h2>
    <div className=' w-full max-w-xs border border-zinc-200 px-4 py-6 rounded-md shadow bg-zinc-50'>
  
        <form action="">
            <div className=' flex flex-col gap-2.5'>
                <div className=' flex flex-col gap-1'>
                    <label htmlFor="email">E-mail ou Nom utilsateur</label>
                    <input  type="email" name='email' id='email' className=' w-full rounded-md border border-zinc-200 focus:ring-2 focus:ring-zinc-200 ' />
                </div>
                <div className=' flex flex-col gap-1'>
                    <label htmlFor="password">Mot de passe</label>
                    <input   type="password"  name='password' id='password' className=' w-full rounded-md border border-zinc-200 focus:ring-2 focus:ring-zinc-200 ' />
                </div>
                <div className=' w-full flex flex-col gap-1 justify-center'>
                    <button className=' w-full bg-zinc-600 text-lg flex justify-center rounded-md text-white  text-center py-2.5 cursor-pointer hover:bg-zinc-700  focus:ring-4 focus:ring-zinc-200 focus:ring-offset-1'>Connexion</button>
                </div>
            </div>
            
        </form>
    </div>
</div>
  )
}
