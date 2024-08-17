import express, { json } from "express";
import "./database/connection.js";
import mongoose from "mongoose";
import List from "./Models/User.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/get/todos", async (req, res) => {
  List.find()
  .then( result => { 
    console.log(result)
    res.json(result)
})
   
  .catch(err => res.json(err))
});

app.post("/post/todos", async (req, res) => {
  // const list =await List.find()
  console.log(req.body);
  const data = new List(req.body);
  const result = await data.save()
  .then(result=>{res.json(result)})
  .catch(err =>{res.json(err)})
  
});
app.put("/update/:id",async(req,res)=>{
  const { id } = req.params;

  // Delete the document by ID
  List.findByIdAndDelete(id)
    .then((result) => res.json({ message: "Document deleted", result }))
    .catch((err) => console.log(err));
  
})
app.listen(4000, () => {
  console.log("Server is on port 4000");
});
