export default function editDetails(details, id, setName, setModel, setNetWorth, setScreenPrice, setBatteryPrice, setDBoardPrice, setId) {
    details.forEach(detail => {
      if(detail.id === id){
        setName(detail.name);
        setModel(detail.model);
        if(setBatteryPrice){
          setBatteryPrice(detail.batteryPrice);
          setScreenPrice(detail.screenPrice);
          setDBoardPrice(detail.dBoardPrice);
        }
        setNetWorth(detail.netWorth);
        setId(id)
      }
    })
  }