import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import prisma from './prisma';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//create multiple in students table
app.post('/students' , async(req , res)=>{
  try{
    const student = await prisma.student.createMany(
      {
        data:req.body,
        skipDuplicates: true
      }
    )
    res.status(200).json(
      {
        message:"Students created",
        count: student.count
      }
    )
  }catch(error){
    res.status(500).json({error:(error as Error).message});
  }
});



//delete all from students table
app.delete('/students' , async(req , res)=>{
  try{
    const result = await prisma.student.deleteMany({});
    res.status(200).json(
      {
        message:"Students deleted succesfully",
        count: result.count
      }
    )
  }catch(error){
    res.status(500).json({error:(error as Error).message});
  }
});






app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('✅ Prisma + PostgreSQL connected successfully!');
});