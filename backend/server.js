import express from 'express' 
import mysql from 'mysql'

const app = express()
app.use(cors())
const db = mysql.createConnection({
  host:"localhost" ,
  user:"root" ,
  password:"Chaimamysql123@",
  database:"dxctech"
});


app.get("/", (req, res)=>{
  res.json("hello this is my first backend")
});

app.get("/desk", (req, res)=>{
  const q ="SELECT * FROM desk"
  db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  });
});

app.post("/desk", (req, res)=>{
    const q ="INSERT INTO desk (`ID_Desk`,`Marque`,`Modèle`,`Année de fabrication`) VALUES (?)"
    const values =["2007","mercedes","nbbbbb","1992"];

    db.query(q,[values],(err,data)=>{
      if(err) return res.json(err)
      return res.json("desk has been created successfully")
    });
  });




app.listen(8800, () => {
  console.log('Connected to backend');
});
