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


//get number of students for first card
app.get('/card1', async (req, res) => {
  try {
    const studentCount = await prisma.student.findMany();
    res.status(200).json({
      success: true,
      count: studentCount
    });
  } catch (error) {
    console.error("Prisma Count Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//get avg class marks for second card
app.get('/card2', async (req, res) => {
  try {
    const studentMarks = await prisma.$queryRaw`select avg(marks) as average from "marks"`;

    res.status(200).json(studentMarks);

  } catch (error) {
    console.error("Prisma Fetch Error:", error);
    res.status(500).json({ 
      error: "Failed to fetch marks data",
      details: (error as Error).message 
    });
  }
});



app.get("/card3", async(req , res) => {
  try{
    const attendance = await prisma.attendance.count({
      where:{
        status:'PRESENT'
      }
    })

    res.status(200).json(attendance);
  }catch(error){
    res.status(500).json({
      error:"failed to fetch attendance"
    })
  }
})



// app.get("/card4" , async(req , res) => {
//   try{
//     const getMarks = await prisma.marks.count({
//       where:{
        
//       }
//     })
//   }
// })



//for chart analysis
app.get("/chart", async (req, res) => {
  try {
    const chartData = await prisma.marks.groupBy({
      by: ["usn"],
      _avg: {
        marks: true
      },
      orderBy: {
        usn: "asc"
      }
    });

    res.json(chartData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
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


app.get("/studentstable" , async(req , res) => {
  try{
    const student = await prisma.student.findMany();
    res.status(200).json(student);
  }catch(error){
    res.status(500).json({error:(error as Error).message});
  }
})


//for each student graph analysis in the table 
app.get("/api/marks/analysis/:usn", async (req, res) => {
  try {
    const { usn } = req.params;
    const searchUsn = usn.trim().toUpperCase(); // Matches NeonDB records like 4AL24CG001

    const rawMarks = await prisma.marks.findMany({
      where: { 
        usn: searchUsn 
      },
      orderBy: {
        subcode: 'asc' // Keeps subject order consistent for the graph
      }
    });

    console.log(`Searching for [${searchUsn}] - Rows found: ${rawMarks.length}`);

    // CRITICAL: You must send the response back to the frontend
    res.json(rawMarks); 

  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown database error" });
    }
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
    const attendance = await prisma.attendance.createMany({data:req.body})
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