import dayjs from 'dayjs';


function addNewDetails(setDetails, details, newDetails, detailsValue) {
  const day = dayjs()
  if (detailsValue[0] || detailsValue[1]) {
    setDetails([
      ...details,
      {
        id: crypto.randomUUID(),
        name: detailsValue[0],
        model: detailsValue[1],
        netWorth: detailsValue[2],
        screenPrice: detailsValue[3],
        batteryPrice: detailsValue[4],
        dBoardPrice: detailsValue[5],
        last_modified: day.format('dddd, MMMM D'),
        modified_time: day.format('h:mm:ss a')
      }
    ]);

    newDetails(false)
  }
}

export default addNewDetails;