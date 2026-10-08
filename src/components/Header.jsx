import { useEffect, useState } from 'react';
import Menu from '../assets/menu.svg';
import Search from '../assets/search.svg';
import './Header.css'
import getInput from '../scripts/getInput';


export function Header({ docWidth, page, toggleMenu, setToggleMenu, userName, details, setDetails, detailsKey, setOperators }) {
  const [searchInput, setSearchInput] = useState('');
  let searchDetails = [];
  
  useEffect(() => {
    if(searchInput < 1){
      setDetails(JSON.parse(localStorage.getItem(detailsKey)) || []);

      setOperators(true)
    };

    (JSON.parse(localStorage.getItem(detailsKey)) || details).forEach((detail) => {
      if (searchInput.length >= 1) {
        if (detail.model.toLowerCase().trim().includes(searchInput.toLowerCase().trim())) {
          searchDetails.push(detail);
          setDetails(searchDetails);
        }else{
          setDetails(searchDetails)
        }

        setOperators(false)
      }
    })
  }, [searchInput])


  function toggle() {
    setToggleMenu(!toggleMenu)
  }

  if (docWidth >= 725) {
    setToggleMenu(true)
  }

  useEffect(() => {
    setToggleMenu(true)
  }, [])

  return (
    <>
      <header>
        {docWidth >= 725
          ? (<h1>{page}</h1>)
          : (<img src={Menu} alt="Menu" className='menu-icon' onClick={toggle} />)
        }

        <div className='search-container'>
          <input
            type="search"
            placeholder='Search By Model...'
            className='search-input'
            onChange={() => {
              getInput(event, setSearchInput);
            }}
          />
          <button className='search-button'>
            <img src={Search} alt="" className='search-icon' />
          </button>
        </div>

        {docWidth >= 725 && (<h4>@{userName || userName}</h4>)}
      </header>
    </>
  )
}