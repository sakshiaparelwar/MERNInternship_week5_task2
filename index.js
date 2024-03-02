const mongoose = require("mongoose");

// database connection
mongoose
  .connect("database_link")
  .then(() => console.log("database connected succesfully!!"))
  .catch((err) => console.log("database not connected ", err));

// first schema
const academicSchema = new mongoose.Schema({
  studentID: Number,
  name: String,
  grades: Number,
  subjects: String,
  groups: String,
});

const academicRecords = new mongoose.model("academicRecords", academicSchema);

// second schema
const cocurricularactivitiesSchema = new mongoose.Schema({
  studentID: Number,
  name: String,
  activityType: String,
  duration: Number,
  achievements: String,
});

const cocurricularActivitiesRecords = new mongoose.model(
  "cocurricularActivitiesRecords",
  cocurricularactivitiesSchema
);

// data to send for only one document
const singledata1 = new academicRecords({
  studentID: 1,
  name: "Raju Kale",
  grades: 50,
  subjects: "Math",
  groups: "Yellow",
});

const singledata2 = new cocurricularActivitiesRecords({
  studentID: 1,
  name: "Raju Kale",
  activityType: "basketball",
  duration: 1000,
  achievements: "Gold",
});

singledata1.save();
singledata2.save();

const createDocument1 = async () => {
  try {
    const allData = await academicRecords.create([
      {
        studentID: 2,
        name: "Saloni Pal",
        grades: 88,
        subjects: "Math",
        groups: "Blue",
      },
      {
        studentID: 3,
        name: "Anirudh",
        grades: 88,
        subjects: "Physics",
        groups: "Red",
      },
      {
        studentID: 2,
        name: "Sakshi p",
        grades: 90,
        subjects: "Math",
        groups: "Yellow",
      },
      {
        studentID: 2,
        name: "Shreshtra",
        grades: 88,
        subjects: "Physics",
        groups: "Blue",
      },
    ]);
  } catch (e) {
    console.log(e);
  }
};

// createDocument1();

const createDocument2 = async () => {
  try {
    const allData = await cocurricularActivitiesRecords.create([
      {
        studentID: 2,
        name: "Saloni Pal",
        activityType: "Badminton",
        duration: 2000,
        achievements: "Gold",
      },
      {
        studentID: 3,
        name: "Anirudh",
        activityType: "Badminton",
        duration: 2000,
        achievements: "Gold",
      },
      {
        studentID: 4,
        name: "Sakshi P",
        activityType: "Badminton",
        duration: 2000,
        achievements: "Gold",
      },
      {
        studentID: 5,
        name: "Shrestha",
        activityType: "Badminton",
        duration: 2000,
        achievements: "Gold",
      },
    ]);
  } catch (error) {
    console.log(error);
  }
};

createDocument2();

// // To insert we can use collectioname.insert()

// // const getDocument1 = async () => {
// //   //   const result = await academicRecords.find();

// //   // const result = await academicRecords.find({ subjects: "Math" });
// //   //   const result = await academicRecords.find({ groups: "Yellow", studentID:"2" });

// //   const result = await academicRecords.find({ grades: 90 }, { studentID: 0 });

// //   console.log(result);
// // };

// // getDocument1();

const getDocument2 = async () => {
  const result1 = await cocurricularActivitiesRecords.find();

  const result2 = await cocurricularActivitiesRecords.find({
    activityType: "Badminton",
  });

  const result3 = await cocurricularActivitiesRecords.findOneAndUpdate(
    { activityType: "Badminton" },
    { $set: { duration: 5000 } },
    { new: true }
  );

  const result4 = await cocurricularActivitiesRecords.updateMany(
    { activityType: "Badminton" },
    { $set: { duration: 5000 } }
  );

  const result5 = await cocurricularActivitiesRecords.deleteOne({
    activityType: "Badminton",
  });

  const result6 = await cocurricularActivitiesRecords.deleteMany({
    activityType: "Badminton",
  });
  console.log(result6);
};

getDocument2();
