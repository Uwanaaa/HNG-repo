//Download express package 
const express = require('express');
//Initalizing express variables
const app = express();
const PORT = 4041;

//Function for day of the week 
const day = new Date.getDay();
function today(){
    switch (day) {
  case 0:
    return "Sunday";
  case 1:
    return "Monday";
  case 2:
    return "Tuesday";
  case 3:
    return "Wednesday";
  case 4:
    return "Thursday";
  case 5:
    return "Friday";
  case  6:
    return "Saturday";
};
};

// The UTC date and time 
const day = new Date();
const timeWithoutMilliseconds = new Date(day.setMilliseconds(0)).toISOString().slice(0, -5) + 'Z';

    
// Starting api actions 
app.get('/api', (req, res) => {
    return res.json({
        "slack_name": "req.query.slack_name",
        "current_day": today(),
        "utc_time": timeWithoutMilliseconds,
        "track": "req.query.track",
        "github_file_url": "https://github.com/Uwanaaa/repo/blob/main/file_name.ext",
        "github_repo_url": "https://github.com/Uwanaaa/HNG-repo.git",
        "status_code": 200
    })
});

app.listen(PORT,() => {
    console.log("Server listening on ", PORT);
});

