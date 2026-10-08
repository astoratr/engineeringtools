import { useEffect, useState } from "react"
import getInput from "../scripts/getInput";

export function EditUser({ userName, setUserName, toggleUserDiag, setToggleUserDiag }) {
  const [inputText, setInputText] = useState('')
  const [inputEmpty, setInputEmpty] = useState(false)
  const [canChange, setCanChange] = useState('')

  const inputLength = inputText.length;

  function toggle() {
    setToggleUserDiag(false)
  }

  useEffect(() => {
    setToggleUserDiag(false)
  }, [])

  function updateUserName() {
    if (inputLength >= 6) {
      setCanChange('Yes');
      setTimeout(() => {
        setUserName(inputText);
        toggle();
        setInputText('');
        setCanChange('')
      }, 2000);
    }

    if (!inputLength) {
      setInputEmpty(true);
      setTimeout(() => {
        setInputEmpty(false)
      }, 1000)
    }
  }


  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('userName', userName);
    }, 1000);
  }, [userName])

  return (
    <>
      <div className={toggleUserDiag
        ? "userDialog"
        : 'displayNone'
      }>
        <h2>Change Username</h2>
        <input
          type="text"
          value={inputText}
          placeholder="Enter new username"
          onChange={() => { getInput(event, setInputText) }}
        />

        {inputLength >= 1 && inputLength < 6
          ? <p className="error">Username is less than 6</p>
          : ''
        }

        {inputEmpty && <p className="error">Input can't be empty</p>}

        <div>
          <button
            className='green cursor_pointer'
            onClick={updateUserName}>
            {!canChange
              ? 'Change'
              : 'Changing...'
            }
          </button>
          <button className='red cursor_pointer' onClick={toggle}>Exit</button>
        </div>
      </div>

    </>
  )
}
