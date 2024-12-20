import './App.css'
import {client_id, api_key, redirect_uri} from './components/utils'
import { 
  initializeDimoSDK, 
  DimoAuthProvider
} from "@dimo-network/login-with-dimo"
import Dimo from './components/Dimo'

initializeDimoSDK({
  clientId: client_id,
  redirectUri: redirect_uri,
  // OPTIONAL
  apiKey: api_key,
  // environment: "production", 
})

function App() {

  return (
    <DimoAuthProvider>
      <Dimo />
    </DimoAuthProvider>
  )
}

export default App
