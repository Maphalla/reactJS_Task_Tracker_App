import { useState } from "react";

const AddTask = ( {color , name, onAdd } ) => {

   //  const [addname , setName] = useState('Data-Saved')
    const [text , setText] = useState('')
    const [day , setDay] = useState('')
    const [reminder , setReminder] = useState(false)
  
    //preventing the form from submitting the data to another page.
    const onSubmit=(e)=>{
       e.preventDefault()

   //form validation
       if(!text){
          alert("please enter a task before saving!!!")
          return
       }
       
       onAdd({text , day , reminder})

       //clearing the form
       setText('')
       setDay('')
       setReminder(false)
    }

    return (

    <form className='add-form' action="#" onSubmit={onSubmit}>
        <div className='form-control'>
        <label>Task</label>
        <input type="text" placeholder="Enter Task here" value={text} onChange={(e)=>setText(e.target.value)}/>
       </div>

       <div className='form-control'>
        <label>Day & Time</label>
        <input type="text" placeholder="Enter Month, Day & Time" value={day} onChange={(e)=>setDay(e.target.value)}/>
       </div>

       <div className='form-control form-control-check'>
        <label>Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
       </div>
       <input type="submit" style={{background:color}} value={name} className="btn btn-block" />
    </form>

  )
}

export default AddTask;