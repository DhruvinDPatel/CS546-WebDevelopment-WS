const express = require('express');
const router = express.Router();

let educationInfo =[
    {
      "schoolName": "Stevens Institute of Technology",
      "degree": "Masters of Science in Computer Science(Aug 2016 - Dec 2017)",
      "favoriteClass": "CS573",
      "favoriteMemory": "I liked the way of teaching of Prof. Edward Amoroso very much. And they made it very interesting. One of the memorable day was at mid of the semester, Prof explained Diffie-Hellman algorithm, which is very difficult to understand. Prof plot some simple shapes and they explained in a matter that any person who is not of security background also can understand that easily."
    },
    {
      "schoolName": "Gujarat Technological University",
      "degree": "Bachelors of Engineering in Computer Engineering(2012-2016)",
      "favoriteClass": "Object Oriented Programming",
      "favoriteMemory": "This Bachelors course was combination of many Engineering concepts for first year and then it is consist of many Computer Science core subjects. My favourite subject was Object Oriented Design and Implementation. I only knew about the functional and procedural programming approach till I came across that subject. I learned many OOD concepts like think every thing in terms of classes, function override, inheritance, polymorphism etc."
    }
]

router.get("/", (req, res) => {
        res.json(educationInfo);
    }, () => {
        // Something went wrong with the server!
        res.status(500).send();
});

module.exports = router;