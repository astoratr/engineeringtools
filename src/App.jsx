import { Routes, Route } from 'react-router'
import { useState } from 'react';

import HomePage from './pages/HomePage';
import PhoneDetails from './pages/PhoneDetails';
import LaptopDetails from './pages/LaptopDetails';
import StorageDetails from './pages/StorageDetails';
import './App.css'
import Tools from './pages/Tools';

function App() {
  const [docWidth, setDocWidth] = useState(window.innerWidth);

  const [toggleMenu, setToggleMenu] = useState(true);

  const [toggleUserDiag, setToggleUserDiag] = useState(false)

  const [userName, setUserName] = useState( localStorage.getItem('userName') || '');

  const [updateDetails, setUpdateDetails] = useState(false);

  const [operators, setOperators] = useState(true)

  const [newDetails, setNewDetails] = useState(false)

  window.addEventListener('resize', () => {
    setDocWidth(window.innerWidth)
  })


  return (
    <Routes>
      <Route index element={<HomePage
        setUserName={setUserName}
        userName={userName}
      />} />

      <Route path='phonedetails' element={<PhoneDetails
        docWidth={docWidth}
        userName={userName}
        setUserName={setUserName}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        newDetails={newDetails}
        setNewDetails={setNewDetails}
        toggleUserDiag={toggleUserDiag}
        setToggleUserDiag={setToggleUserDiag}
        updateDetails={updateDetails}
        setUpdateDetails={setUpdateDetails}
        operators={operators}
        setOperators={setOperators}
      />} />

      <Route path='laptopdetails' element={<LaptopDetails
        docWidth={docWidth}
        toggleMenu={toggleMenu}
        userName={userName}
        setUserName={setUserName}
        setToggleMenu={setToggleMenu}
        newDetails={newDetails}
        setNewDetails={setNewDetails}
        toggleUserDiag={toggleUserDiag}
        setToggleUserDiag={setToggleUserDiag}
        updateDetails={updateDetails}
        setUpdateDetails={setUpdateDetails}
        operators={operators}
        setOperators={setOperators}
      />} />

      <Route path='storagedetails' element={<StorageDetails
        docWidth={docWidth}
        toggleMenu={toggleMenu}
        userName={userName}
        setUserName={setUserName}
        setToggleMenu={setToggleMenu}
        newDetails={newDetails}
        setNewDetails={setNewDetails}
        toggleUserDiag={toggleUserDiag}
        setToggleUserDiag={setToggleUserDiag}
        updateDetails={updateDetails}
        setUpdateDetails={setUpdateDetails}
        operators={operators}
        setOperators={setOperators}
      />} />

      <Route path='tools' element={<Tools
        docWidth={docWidth}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        userName={userName}
        setUserName={setUserName}
        toggleUserDiag={toggleUserDiag}
        setToggleUserDiag={setToggleUserDiag}
        updateDetails={updateDetails}
        setUpdateDetails={setUpdateDetails}
        operators={operators}
        setOperators={setOperators}
      />} />

    </Routes>
  )
}

export default App