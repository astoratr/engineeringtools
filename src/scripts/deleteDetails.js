export default function deleteDetails(setDetails, details, id, updateDetails, setUpdateDetails) {
  setDetails(
    details.filter(detail => {
      return detail.id !== id ? detail : null
    })
  );

  setUpdateDetails(!updateDetails)

}