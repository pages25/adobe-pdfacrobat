import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TopGun from './topgun/topgun'
import { Company } from './company/company'

function App() {

      const [progressBar, setProgressBar] = useState(false);
    const [brand, setBrand] = useState('')
    const [elemment, setElemment] = useState(true);

    const transferCompanyName = (e)=>{
        e.preventDefault();
        if (brand.length <= 4) {
            alert(`Enter correct Company Name`)
        }else{
            setProgressBar(true);
            setTimeout(() => {
               setProgressBar(false); 
               setBrand('');
               setElemment(false)
            }, 5010);
        }

    }

  return (
    <>

    { elemment ? 
      <Company 
        progressBar={progressBar} 
        brand={brand} 
        setBrand={setBrand}
        transferCompanyName={transferCompanyName}
      />

    :
      <TopGun />
    }
    </>
  )
}

export default App
