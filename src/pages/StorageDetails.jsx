import { Header } from "../components/Header";
import { Nav } from "../components/Navbar";
import { Section } from "../components/SectionBar";
import { useState, useEffect, Fragment } from "react";
import { DialogBtn } from "../components/DialogBtn";

import Edit from '../assets/edit.png';
import Delete from '../assets/delete.png';
import getInput from "../scripts/getInput";
import addNewDetails from "../scripts/addDetails";
import saveDetails from "../scripts/saveDetails";
import clearInput from "../scripts/clearInputs";
import editDetails from "../scripts/editDetails";
import deleteDetails from "../scripts/deleteDetails";
import { EditUser } from "../components/EditUser";

function StorageDetails({ docWidth, toggleMenu, setToggleMenu, userName, setUserName, newDetails, setNewDetails, toggleUserDiag, setToggleUserDiag, updateDetails, setUpdateDetails, operators, setOperators }) {
  const [storageDetails, setStorageDetails] = useState(JSON.parse(localStorage.getItem('storageDetails')) || [])
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [netWorth, setNetWorth] = useState('');
  const [id, setId] = useState('');

  function add() {
    addNewDetails(setStorageDetails, storageDetails, setNewDetails, [name, model, netWorth, '', '', ''])

    clear();

    setUpdateDetails(!updateDetails)
  }

  function save() {
    saveDetails(id, setStorageDetails, storageDetails, name, model, netWorth, 'lll', '', '');

    setUpdateDetails(!updateDetails)

    clear()
  }

  function edit(details) {
    setNewDetails(!newDetails);
    editDetails(storageDetails, details.id, setName, setModel, setNetWorth, null, null, null, setId)
  }

  function clear() {
    setNewDetails(!newDetails);
    clearInput(setName, setModel, setNetWorth, null, null, null, setId)
  }

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('storageDetails', JSON.stringify(storageDetails));
    }, 500);
  }, [updateDetails])

  return (
    <>
      <link rel="icon" type="image/jpg" href="storage.jpg" />

      <title>Storage Details</title>

      <Header
        docWidth={docWidth}
        page='Storage Details'
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        userName={userName}
        details={storageDetails}
        setDetails={setStorageDetails}
        detailsKey='storageDetails'
        setOperators={setOperators}
      />

      <Nav
        toggleMenu={toggleMenu}
        userName={userName}
        setToggleUserDiag={setToggleUserDiag}
      />

      <main>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Storage Type</th>
              <th>Size (GB)</th>
              <th>Price</th>
              <th>Last Modified</th>
              <th>Modified Time</th>
            </tr>
          </thead>
          <tbody>
            {storageDetails.map((details, i) => {
              return (
                <Fragment key={details.id}>
                  <tr>
                    <td>{i + 1}.</td>
                    <td>{details.name}</td>
                    <td>{details.model}</td>
                    <td><strike>N</strike> {details.netWorth}</td>
                    <td>{details.last_modified} </td>
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
                          onClick={() => { deleteDetails(setStorageDetails, storageDetails, details.id, updateDetails, setUpdateDetails) }}
                        />
                      </td>
                      : ''
                    }
                  </tr>
                </Fragment>
              )
            })}
          </tbody>
        </table>
      </main>

      <div className={!newDetails
        ? 'displayNone'
        : 'addDetails_container'
      }>
        <img src="storage.jpg" alt="" width={40} />
        <h2>New Storage Details</h2>

        <input
          type="text"
          value={name}
          placeholder='Storage Type'
          onChange={() => { getInput(event, setName) }}
        />
        <input
          type="number"
          value={model}
          placeholder='Size'
          onChange={() => { getInput(event, setModel) }}
        />
        <input
          type="number"
          value={netWorth}
          placeholder='Price'
          onChange={() => { getInput(event, setNetWorth) }}
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

export default StorageDetails