const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

app.post('/twilio/callback', (req, res) => {

    console.log("this is whole body ", req.body)
    const recordingUrl = req.body.RecordingUrl;
    console.log("Received recording URL:", recordingUrl);
    res.sendStatus(200);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});