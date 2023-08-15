import { useState, useEffect } from 'react'
import './App.css'
import { getCryptos } from './api/getCryptos'
import Card from './Card'

function App() {
  const [cryptos, setCryptos] = useState([])


useEffect (()=> {
  getCryptos().then(res => res.json()).then(data => setCryptos(data))
},[])



  return (
    <div className='container-cards'>
      {
        cryptos.map(crypto => <Card crypto= {crypto} key={crypto.id}/>)
      }
     </div>
  
  )
}

export default App
