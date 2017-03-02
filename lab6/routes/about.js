const express = require('express');
const router = express.Router();

let aboutMe ={
    "name": "Dhruvin Patel",
    "biography": "Hello there, My name is Dhruvin Dineshbhai Patel and currently I'm graduate CS student at Stevens Institute of Technology. I'm comfortable with multiple operating systems like MS Windows, MacOS, Ubuntu, CentOS. I feel proud of Indian traditions and culture, misssing those sometimes in States. I'm not hardcore developer but I do like programming and I'm more comfortable with Java. I've intermediate fluency with Python. I have been into Computer Engineering for the last 4 years which has helped me grow and explore a variety of domains. I have accomplished web development and mobile application development projects independently and in team also. During my Bachelors, I feel that I learned more concepts of theoretical core computer science like Theory Of Computation, Compiler Design, Data and File Structures, Operating System, Computer Networks. Now I'm looking forward to get some industry experience as Summer Intern. The capability to solve problems with my technical skill-set has improved over the years as I participated in various competitions and learning about new technologies as I progressed. I like to read thought provoking articles and research in depth about any topic I find intriguing. Its important for me that people with whom I work are happy and cheerful. I desire to meet new people, make friends, observe, learn, grow, and contribute with the knowledge I have gained over the years. I don't know if it's hobby of mine or something else but I eat a lot.",
    "favoriteShows": ["Suits", "Prison Break", "Game of Thrones", "Daily News and Analysis(DNA)", "Bhabhiji Ghar par hain","Tarak Mehta ka oolta Chasma"],
    "hobbies": ["Reading Technical Blogs", "Updating myself with latest gadgets", "Love watching gadget review videos/blogs","EDM","Reading/Watching Politics(Indian) News","Eating :-)"]
}

router.get("/", (req, res) => {
        res.json(aboutMe);
    }, () => {
        // Something went wrong with the server!
        res.status(500).send();
});

module.exports = router;