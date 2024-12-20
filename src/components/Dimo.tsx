import React from 'react'
import {useDimoAuthState, LoginWithDimo} from '@dimo-network/login-with-dimo'
import { client_id } from './utils'

export default function Dimo() {
    const { 
        isAuthenticated, 
        getValidJWT, 
        email, 
        walletAddress, 
        getEmail 
      } = useDimoAuthState()
  return (
    <div>
        <p>email {email}</p>
        <LoginWithDimo
            mode='embed'
            onError={(err)=> console.log('err=>', err)}
            onSuccess={(err)=> console.log('success=>', err)}
            
        />
    </div>
  )
}
