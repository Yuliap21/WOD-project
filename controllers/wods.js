const Workout = require('../models/workout')
const router = require('express').Router();


//create
router.post('/', async (req, res) =>{
  try{
    const createdWorkout = await Workout.create(req.body)
    res.status(200).json(createdWorkout)
  }catch(error){
    console.error(error);
    res.status(400).json({message:error.message})

  }
})

//read

router.get('/', async (req, res) =>{
  try{
    const foundWorkout = await Workout.find({})
    res.status(200).json(foundWorkout)
  }catch(error){
    console.error(error);
    res.status(400).json({ message: error.message});
  }
})


/* Show */
      router.get('/:id', async (req, res) => {
        try{
          const foundWorkout = await Workout.findById(req.params.id)
          res.status(200).json(foundWorkout)
        }catch(error){
          console.error(error);
          res.status(400).json({ message: error.message });
        }
      })

      // Update

      router.put('/:id', async (req, res) => {
          try {
            const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.status(200).json(updatedWorkout)
          }catch(error){
            console.error(error);
            res.status(400).json({ message: error.message })
          }
        })


      // Delete

      router.delete('/:id', async (req, res) => {
        try{
          const deletedWorkout = await Workout.findByIdAndDelete(req.params.id);
          res.status(200).json(deletedWorkout);
        } catch(error){
          console.error(error);
          res.status(400).json({ message: error.message})
        }
      })

      module.exports = router;
