export default function clearInput(setName, setModel, setNetWorth, setScreenPrice, setBatteryPrice, setDBoardPrice, setId) {
  setName('');
  setModel('');
  setNetWorth('');
  if(setScreenPrice){
    setScreenPrice('');
    setBatteryPrice('');
    setDBoardPrice('');
  }
  setId('')

}