import Astor from '../assets/astor.png';
import './HomePage.css'
import { useEffect, useState } from 'react';

function HomePage({ setUserName, userName }) {
  const [nextBtn, setNextBtn] = useState(true)
  const [timer, setTimer] = useState(undefined)
  const [userInput, setUserInput] = useState('')


  const inputLength = userInput.length;

  function getText(e) {
    const inputValue = e.target.value;
    setUserInput(inputValue)
  }

  function setName() {
    
    if (inputLength >= 6) {
      setNextBtn(!nextBtn)
    }
    
    if (nextBtn) {
      if (inputLength >= 6) {
        setTimer(
          setTimeout(() => {
            setUserName(localStorage.setItem('userName', userInput));
        
            location.href = 'phonedetails'
          }, 28000)
        )
      }
    } else {
      clearTimeout(timer)
    }
  }

  useEffect(() => {
    if(userName){
      setTimeout(() => {
        location.href = 'phonedetails'
      }, 5000)
    }
  }, [])

  return (
    <>
      <title>Engineering T&P</title>

      <link rel="icon" type="image/png" href="/icon.png" />

      <div className='container'>
        <img src={Astor} className='astor_img' alt="" />

        {!userName
          ? <>
            <div className='inputfield'>
              <input
                type="text"
                placeholder='Enter username' className='user-input'
                autoFocus
                onChange={getText}
              />

              <button
                className='next'
                onClick={setName}
              >{nextBtn
                ? 'Next >'
                : <div className="loader"></div>}
              </button>
            </div>

            <div className='welcome-container'>
              {inputLength >= 1 && inputLength < 6
                ? <div className='error'>Username is les than 6</div>
                : ''
              }
              {!nextBtn && <p><span>✅</span> </p>}
            </div>
          </>

          : <h1 className='user-welcome'>Welcome Back <br /> <span>@ {userName}</span></h1>
        }

      </div>
    </>
  )
}

export default HomePage;