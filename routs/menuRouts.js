const express = require('express');
const router = express.Router();
const Menu = require('./../models/Menu');

router.post('/', async (req,res)=>{
  try{
    const data = req.body;
    const newMenu = new Menu(data);

    const response = await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

router.get('/', async (req,res)=>{
  try{
    const data = await Menu.find();
    console.log("data fetched");
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

router.get('/:tast', async (req,res)=>{
  try{
    const tast = req.params.tast;
    if(tast == 'sweet' || tast == 'spicy' || tast == 'sour'){
      
      const response = await Menu.find({taste: tast});
      console.log('response fetched');
      res.status(200).json(response);

    }else{
      res.status(404).json({error: 'Invalid work type'});
    }
    
  }
  catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
  }
});

router.put('/:id', async (req,res)=>{
  try{
    const menuId = req.params.id;
    const updataedMenuData = req.body;
    const response = await Menu.findByIdAndUpdate(menuId,updataedMenuData,{
      new:true,
      runValidators: true,
    })
    console.log('Data updated');
    res.status(200).json(response);

    if(!response){
      return res.status(404).json({error: 'Person not found'});
    }

  }
  catch(err){ 
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

router.delete('/:id',async (req,res)=>{
  try{
    const menuId = req.params.id;
    const response = await Menu.findByIdAndDelete(menuId);
    if(!response){
      return res.status(404).json({error: 'Person not found'});
    }
    console.log('data deleted');
    res.status(200).json({message: 'person Deleted Successfully'});
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

module.exports = router;