const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;


app.use(bodyParser.json());

app.post('/sendMsg',async (req,res) => {
	const { apiKey, campaignName,destination,userName,source,media,templateParams, tags,attributes } = req.body;

	const payload = {
		apiKey,
		campaignName,
		destination,
		userName,
		source,
		media,
		templateParams,
		tags,
		attributes,
	};

	try {
		    const response = await axios.post('https://backend.api-wa.co/campaign/myoperator/api/v2', payload);
	} catch (error) {
		res.status(500).send(error.message);
	}
});

app.listen(port,() => {
	console.log(`Server is running at port ${port}`);
});
