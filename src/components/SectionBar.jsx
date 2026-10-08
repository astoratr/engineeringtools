import Add from '../assets/add.svg';
import './SectionBar.css'
import { useEffect } from 'react';

export function Section({ setNewDetails, operators }) {

  function openNewDetails() {
    setNewDetails(true)
  }

  useEffect(() => {
    setNewDetails(false)
  }, [])

  return (
    <>
      <section>
        {operators
          ? <button title="Add new" onClick={openNewDetails}>
            <img src={Add} alt="" />
          </button>
          : ''
        }

      </section>
    </>
  )
}