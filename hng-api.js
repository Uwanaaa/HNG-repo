const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000

app.get('/project1', (req, res) => {
    return res.json({
        "slack_name": "example_name",
        "current_day": "Monday",
        "utc_time": "2023-08-21T15:04:05Z",
        "track": "backend",
        "github_file_url": "https://github.com/Uwanaaa/repo/blob/main/file_name.ext",
        "github_repo_url": "https://github.com/Uwanaaa/HNG-repo.git",
        "status_code": 200
    })
})