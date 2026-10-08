import { Header } from "../components/Header";
import { Nav } from "../components/Navbar";
import { Section } from "../components/SectionBar";
import { useState, useEffect } from "react";
import { DialogBtn } from "../components/DialogBtn";

import Edit from '../assets/edit.png';
import Delete from '../assets/delete.png';
import addNewDetails from "../scripts/addDetails";
import getInput from "../scripts/getInput";

import './LaptopDetails.css'

import saveDetails from "../scripts/saveDetails";
import clearInput from "../scripts/clearInputs";
import editDetails from "../scripts/editDetails";
import deleteDetails from "../scripts/deleteDetails";
import { EditUser } from "../components/EditUser";

function LaptopDetails({ docWidth, toggleMenu, setToggleMenu, userName, setUserName, newDetails, setNewDetails, toggleUserDiag, setToggleUserDiag, updateDetails, setUpdateDetails, operators, setOperators }) {

  const [lapDetails, setLapDetails] = useState(JSON.parse(localStorage.getItem('lapDetails')) || []);

  const [Manufacture, setManufacture] = useState('');
  const [model, setModel] = useState('');
  const [netWorth, setNetWorth] = useState('');
  const [screenPrice, setScreenPrice] = useState('');
  const [keyboardPrice, setKeyboardPrice] = useState('');
  const [batteryPrice, setBatteryPrice] = useState('');
  const [id, setId] = useState('');

  function add() {
    addNewDetails(setLapDetails, lapDetails, setNewDetails, [Manufacture, model, netWorth, screenPrice, batteryPrice, keyboardPrice]);

    clear()

    setUpdateDetails(!updateDetails)
  }

  function save() {
    saveDetails(id, setLapDetails, lapDetails, Manufacture, model, netWorth, screenPrice, batteryPrice, keyboardPrice);

    setUpdateDetails(!updateDetails)

    clear()
  }

  function clear() {
    setNewDetails(!newDetails);
    clearInput(setManufacture, setModel, setNetWorth, setScreenPrice, setBatteryPrice, setKeyboardPrice, setId)
  }

  function edit(details) {
    setNewDetails(!newDetails);
    editDetails(lapDetails, details.id, setManufacture, setModel, setNetWorth, setScreenPrice, setBatteryPrice, setKeyboardPrice, setId)
  }

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('lapDetails', JSON.stringify(lapDetails));
    }, 500);
  }, [updateDetails])

  return (
    <>
      <link rel="icon" type="image/png" href="lap.png" />
      <title>Laptop Details</title>

      <Header
        docWidth={docWidth}
        page='Laptop Details'
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        userName={userName}
        details={lapDetails}
        setDetails={setLapDetails}
        detailsKey='lapDetails'
        setOperators={setOperators}
      />

      <Nav
        toggleMenu={toggleMenu}
        userName={userName}
        setToggleUserDiag={setToggleUserDiag}
      />

      <main className={newDetails
        ? 'pDetails_container'
        : ''}>

        <table className='table-container'>
          <thead>
            <tr className='table-head-row'  >
              <th>No</th>
              <th>System Manufacture</th>
              <th>System Model</th>
              <th>New Worth</th>
              <th>Screen Price</th>
              <th>Battery Price</th>
              <th>Keyboard Price</th>
              <th>Last Modified</th>
              <th>Modified Time</th>
            </tr>
          </thead>
          <tbody>
            {lapDetails.map((details, i) => {
              return (
                <tr key={details.id}>
                  <td>{i + 1}.</td>
                  <td>{details.name}</td>
                  <td>{details.model}</td>
                  <td><strike>N</strike>{details.netWorth}</td>
                  <td><strike>N</strike> {details.screenPrice}</td>
                  <td><strike>N</strike> {details.batteryPrice}</td>
                  <td><strike>N</strike>{details.dBoardPrice}</td>
                  <td>{details.last_modified}</td>
                  <td>{details.modified_time}</td>
                  {operators
                    ? <td className='dialog-container'>
                      <img
                        src={Edit}
                        alt=""
                        width={18}
                        className='cursor_pointer'
                        onClick={() => {
                          edit(details)
                        }}
                      />

                      <img
                        src={Delete}
                        alt=""
                        width={18}
                        className='cursor_pointer'
                        onClick={() => { deleteDetails(setLapDetails, lapDetails, details.id, updateDetails, setUpdateDetails) }}
                      />
                    </td>
                    : ''
                  }
                </tr>
              )
            })}

          </tbody>
        </table>
      </main>

      <div className={!newDetails
        ? 'displayNone'
        : 'addDetails_container'
      }>
        <img src="lap.png" alt="" width={40} />
        <h2>New Laptop Details</h2>

        <input
          type="text"
          value={Manufacture}
          placeholder='System Manufacture'
          onChange={() => { getInput(event, setManufacture) }}
        />

        <input
          type="text"
          value={model}
          placeholder='System Model'
          onChange={() => { getInput(event, setModel) }}
        />

        <input
          type="number"
          value={netWorth}
          placeholder='Net Worth'
          onChange={() => { getInput(event, setNetWorth) }}
        />

        <input
          type="number"
          value={screenPrice}
          placeholder='Screen Price'
          onChange={() => { getInput(event, setScreenPrice) }}
        />

        <input
          type="text"
          value={batteryPrice}
          placeholder='Battery Price'
          onChange={() => { getInput(event, setBatteryPrice) }}
        />

        <input
          type="number"
          value={keyboardPrice}
          placeholder='Keyboard Price'
          onChange={() => { getInput(event, setKeyboardPrice) }}
        />

        <DialogBtn
          id={id}
          add={add}
          save={save}
          clear={clear}
        />
      </div>

      <EditUser
        userName={userName}
        setUserName={setUserName}
        toggleUserDiag={toggleUserDiag}
        setToggleUserDiag={setToggleUserDiag}
      />

      <Section
        setNewDetails={setNewDetails}
        operators={operators}
      />
    </>
  )
}

export default LaptopDetails;