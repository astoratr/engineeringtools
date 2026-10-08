export function DialogBtn({ id, add, save, clear }) {
  return (
    <div>
      {id === ''
        ? <button onClick={add}>Add Details</button>
        : <button onClick={save}>Save</button>
      }

      <button
        onClick={clear}
      >Cancel</button>
    </div>
  )
}