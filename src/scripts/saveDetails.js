import dayjs from 'dayjs';


export default function saveDetails(id, setDetails, details, name, model, netWorth, screenPrice, batteryPrice, dBoardPrice) {
  const day = dayjs();
  setDetails(
    details.map(detail => {
      return detail.id === id
        ? {
          id: detail.id,
          name,
          model,
          netWorth,
          screenPrice,
          batteryPrice,
          dBoardPrice,
          last_modified: day.format('dddd, MMMM D'),
          modified_time: day.format('h:mm:ss a')
        }
        : detail
    })
  )
}