import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Nav } from '../components/Navbar';
import { Section } from '../components/SectionBar';
import { DialogBtn } from '../components/DialogBtn';

import getInput from '../scripts/getInput';
import addNewDetails from '../scripts/addDetails';
import editDetails from '../scripts/editDetails';

import Edit from '../assets/edit.png';
import Delete from '../assets/delete.png';
import './PhoneDetails.css'
import clearInput from '../scripts/clearInputs';
import saveDetails from '../scripts/saveDetails';
import deleteDetails from '../scripts/deleteDetails';
import { EditUser } from '../components/EditUser';

function PhoneDetails({ docWidth, toggleMenu, setToggleMenu, userName, setUserName, newDetails, setNewDetails, toggleUserDiag, setToggleUserDiag, updateDetails, setUpdateDetails, operators, setOperators }) {

  const [phoneDetail, setPhoneDetails] = useState(JSON.parse(localStorage.getItem('phoneDetails')) || []);

  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [netWorth, setNetWorth] = useState('');
  const [screenPrice, setScreenPrice] = useState('');
  const [dBoardPrice, setDBoardPrice] = useState('');
  const [batteryPrice, setBatteryPrice] = useState('');
  const [id, setId] = useState('');

  function add() {
    addNewDetails(setPhoneDetails, phoneDetail, setNewDetails, [name, model, netWorth, screenPrice, batteryPrice, dBoardPrice]);

    clear();

    setUpdateDetails(!updateDetails)
  };

  function save() {
    saveDetails(id, setPhoneDetails, phoneDetail, name, model, netWorth, screenPrice, batteryPrice, dBoardPrice);

    setUpdateDetails(!updateDetails)

    clear();
  }

  function clear() {
    setNewDetails(!newDetails);
    clearInput(setName, setModel, setNetWorth, setScreenPrice, setBatteryPrice, setDBoardPrice, setId)
  }

  function edit(details) {
    setNewDetails(!newDetails)
    editDetails(phoneDetail, details.id, setName, setModel, setNetWorth, setScreenPrice, setBatteryPrice, setDBoardPrice, setId)
  }

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('phoneDetails', JSON.stringify(phoneDetail));
    }, 500);
  }, [updateDetails])

  return (
    <>
      <link rel="icon" type="image/png" href="phone.png" />
      <title>Phone Details</title>

      <Header
        docWidth={docWidth}
        page='Phone Details'
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        userName={userName}
        details={phoneDetail}
        setDetails={setPhoneDetails}
        detailsKey='phoneDetails'
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
          <thead className='table-head-row' >
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Model No.</th>
              <th>Net Worth</th>
              <th>Screen Price</th>
              <th>Battery Price</th>
              <th>D-Board Price</th>
              <th>Last Modified</th>
              <th>Modified Time</th>
            </tr>
          </thead>
          <tbody>
            {phoneDetail.map((details, i) => {
              return (
                <tr key={details.id}>
                  <td>{i + 1}.</td>
                  <td>{details.name}</td>
                  <td>{details.model}</td>
                  <td><strike>N</strike> {details.netWorth}</td>
                  <td><strike>N</strike> {details.screenPrice}</td>
                  <td><strike>N</strike> {details.batteryPrice}</td>
                  <td><strike>N</strike> {details.dBoardPrice}</td>
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
                        onClick={() => { deleteDetails(setPhoneDetails, phoneDetail, details.id, updateDetails, setUpdateDetails) }}
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
        <img src="phone.png" alt="" width={40} />
        <h2>New Phone Details</h2>
        <EditUser
          userName={userName}
          setUserName={setUserName}
          toggleUserDiag={toggleUserDiag}
          setToggleUserDiag={setToggleUserDiag}
        />
        <input
          type="text"
          value={name}
          placeholder='Product Name'
          onChange={() => { getInput(event, setName) }}
        />
        <input
          type="text"
          value={model}
          placeholder='Model No.'
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
          type="number"
          value={batteryPrice}
          placeholder='Battery Price'
          onChange={() => { getInput(event, setBatteryPrice) }}
        />
        <input
          type="number"
          value={dBoardPrice}
          placeholder='D-Board Price'
          onChange={() => { getInput(event, setDBoardPrice) }}
        />

        <DialogBtn
          id={id}
          add={add}
          save={save}
          clear={clear}
        />
      </div >

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
export default PhoneDetails;