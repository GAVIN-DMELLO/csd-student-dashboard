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


//get number of students
app.get('/students', async (req, res) => {
  try {
    const studentCount = await prisma.student.count();
    res.status(200).json({
      success: true,
      count: studentCount
    });
  } catch (error) {
    console.error("Prisma Count Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//get usn and their marks for bar graph
app.get('/marks', async (req, res) => {
  try {
    const studentMarks = await prisma.marks.findMany({
      select: {
        usn: true,   // For the X-axis labels
        marks: true, // For the Y-axis bar height
      },
      orderBy: {
        usn: 'asc',
      },
    });

    res.status(200).json(studentMarks);

  } catch (error) {
    console.error("Prisma Fetch Error:", error);
    res.status(500).json({ 
      error: "Failed to fetch marks data",
      details: (error as Error).message 
    });
  }
});



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



//enter attendance 
app.post('/attendance' , async(req , res)=>{
  try{
    const attendance = await prisma.attendance.create({data:req.body})
    res.status(200).json(
      {
        message:"attendance updated successfully",
        no : req.body.usn
      }
    )
  }catch(error){
    res.status(500).json({error:(error as Error).message});
  }
})




//enter multiple marks
app.post('/marks' , async(req , res)=>{
  try{
    const marks = await prisma.marks.createMany(
      {data:req.body}
    )
    res.status(200).json(
      {
        message:"Marks Entered succesfully",
        usn:req.body.usn
      }
    )
  }catch(error){
    res.status(500).json({error:(error as Error).message});
  }
})



//create subjects
app.post('/sub' , async(req , res)=>{
  try{
    const sub = await prisma.sub.createMany({data:req.body});
    res.status(200).json({
      message:"subjects added succesfully",
    })
  }catch(error){
    res.status(500).json({error:(error as Error).message});
  }
});



//populate activities
app.post('/activities' , async(req , res)=>{
  try{
    const activities = await prisma.activity.createMany({data:req.body})
    res.status(200).json(
      {
        message:"student activities updated succesfully",
        count : activities.count
      }
    )
  }catch(error){
    res.status(500).json({error:(error as Error).message});
  }
});




//populate extra activities
app.post('/extra_activities' , async(req , res)=>{
  try{
    const extraActivities = await prisma.extraActivity.createMany({data:req.body})
    res.status(200).json(
      {
        message:"student activities updated succesfully",
        count : extraActivities.count
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