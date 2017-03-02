const express = require('express');
const router = express.Router();

let storyDescription ={
    "storyTitle": "Hardbricking friend's Note 2",
    "story": "Heading of the story itself reveals the climax of the story I'm gonna write. That was a bad day and I learned many things that day. I love applying tweaks and mods to android and even I done many experiments by Jailbreaking iPhone, which is not adviced to do at all. Thing is I was noobie in those things but I brag about it a lot. And one day, my friend told me that he's having many issues with his phone(unfortunate note 2) like less internal storage space because of many preinstalled blotwares and a lot of lagging. I told him that I can help him by rooting his phone. And then by flashing some custom ROM in it. I explained some of the steps to him. But he wasn't that convinced at first. But I gave him assurity that nothing bad is going to happen with his phone. And things go pretty well for the first time. I flashed CyanogenMod to his phone and it was working fine. He was very happy with it. After a month or so, he came to me with phone booted up in Recovery Mode. He was very worried as he thought something happened to his phone. I told him that it is normal. I tried restarting the phone but there was some issue which I don't know. So now I have only one way and that is to flash the ROM once again. And that time I made a blunder. The previous version which I installed was not stable. Its called nightly build. So this time I searched for stable version(SNAPSHOT). But I wasn't paying attention and I flashed some other country's Stable ROM. And guess what, screen flashed and phone switched off. That time I wasn't aware that I flahsed the wrong ROM. So tried booting the phone up but it wasn't helping. And then I checked the version info using md5 checksum and it was of Russian Territory ROM. I don't want to share the words my friend used after that day. :-))). I learned one thing very hard way. Attention to detail in our life is cruicial and one can not start doing that in one day. We have to make it a habit. Secondly, half knowledge is very dangerous."
}

router.get("/", (req, res) => {
        res.json(storyDescription);
    }, () => {
        // Something went wrong with the server!
        res.status(500).send();
});

module.exports = router;