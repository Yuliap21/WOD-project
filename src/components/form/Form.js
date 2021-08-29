import React, { useState } from 'react';



export default AddWorkout({ handleSubmit}) => {
  const [workout, setWorkout] = useState('');


 }

const onSubmit = e =>{
  e.preventDefault();
  handleSubmit(workout);
}
handleSubmit({name, subject, timeCap});
setName('');
setSubject('');
setTimeCap('');

};

return (
  <form onSubmit={handleSubmit}>
  <div className="mb-3"
<label className="form-label">Name</label>
<input className="form-control" type="text" placeholder=" Add Workout" value={name}
onChange={e => setTitle(e.target.value)}/>
<div className="form-text"> body of workout</div>





  </form>
)



}



const Form = () =>{
  return (
    <h1>FORM<h1>
  );
}

export default Form;
