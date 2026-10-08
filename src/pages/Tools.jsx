import Menu from '../assets/menu.svg';
import { EditUser } from '../components/EditUser';

import { useEffect, useState } from 'react';
import { Nav } from "../components/Navbar";
import { tools } from "../data/tools";

import Add from '../assets/add.svg';
;
import './Tools.css'


function Tools({ docWidth, toggleMenu, setToggleMenu, userName, setUserName, toggleUserDiag, setToggleUserDiag }) {
  ;
  const [newTool, setNewTool] = useState(false)

  useEffect(() => {
    setToggleMenu(true)
  }, [])

  return (
    <>
      <link rel="icon" type="image/png" href="tool.png" />

      <title>Tools</title>

      <header>
        {!(docWidth >= 725)
          ? (<img src={Menu} alt="Menu" className='menu-icon' onClick={() => { setToggleMenu(!toggleMenu) }} />)
          : ''
        }

        <h1>Engineering Tools</h1>

        {docWidth >= 725 && (<h4>@{userName}</h4>)}
      </header>

      <Nav
        toggleMenu={toggleMenu}
        userName={userName}
        setToggleUserDiag={setToggleUserDiag}
      />

      <EditUser
        userName={userName}
        setUserName={setUserName}
        toggleUserDiag={toggleUserDiag}
        setToggleUserDiag={setToggleUserDiag}
      />

      <main>
        <h1 className="Heading">COMPUTER AND ELECTRONICS REPAIR TOOLS</h1>
        <h2 className="intro">Introduction:</h2>
        <p className="paragraph">Engineering tools are instruments, devices, and machines used by engineers, technicians, artisans, and students to <b>measure, mark, cut, shape, join, hold, test, repair, and manufacture materials or components.</b></p>

        <h2 className="tool">Tools</h2>
        <p className="paragraph">Here are some common tools used in phone and laptop repair and their functionalities:</p>

        <div className="container_for_tools">
          {tools.map((tool) => {
            return (
              <div className="tool-container" key={tool.Id}>
                <img src={tool.image} alt="tools image" loading="lazy" />
                <h3>{tool.name}</h3>
                <p><b>Function:</b> {tool.function}</p>
                <p><b>Uses:</b> {tool.uses}</p>
                <p><b>Price:</b> <strike>N</strike>{tool.price} </p>

              </div>
            )
          })}
          <div
            className="addTool-container"
            onClick={() => {
              setNewTool(true)
            }}
          >
            <img src={Add} alt="" width={50} />
            <h1>Add More Tools</h1>
          </div>
        </div>

        <div className={newTool
          ? 'addDetails_container'
          : 'displayNone'
        }>
          <h1>New Tools</h1>
          <input type="file" />
          <input type="text" placeholder='Tool Name' />
          <textarea type="text" placeholder='Function'></textarea>
          <input type="text" placeholder='Uses' />
          <input type="number" placeholder='Price' />

          <div>
            <button onClick={() => {alert(`Sorry, you can't upload tools now. \n Stay tune for the latest update...! \n All features will be available. \n Thanks for using, Hope it meet your needs. \n visit our official website \n https://astortech.github.io/potfolio`)}}>Add Details</button>

            <button onClick={() => {
              setNewTool(false)
            }}>Cancel</button>
          </div>
        </div>

        <h2>SUMMARY</h2>
        <p className="paragraph">Engineering tools are essential for transforming raw materials into useful products, repairing machines, measuring dimensions, constructing buildings, maintaining electrical systems, manufacturing components, and carrying out technical experiments.</p>
        <p className='paragraph'>A good engineer or technician should not only know the names of tools but also understand:
        </p>
        <ul className='paragraph'>
          <li>What each tool dose</li>
          <li>Where it is used</li>
          <li>How to select the correct tool</li>
          <li>How to maintain it</li>
          <li>Its limitations</li>
          <li>The safety precautions required</li>
        </ul>
        <p className='paragraph' ><b>Remember:</b> The most expensive tool is not always the best tool. The correct tool, used correctly and safely, is what produces good engineering work</p>
      </main>
    </>
  )
}

export default Tools