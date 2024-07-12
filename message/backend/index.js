const axios = require('axios');

const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWQyZDlhYjM5NWQ0MGJkM2U5MGY5MSIsIm5hbWUiOiJHbyBUb3VyIFRyYXZlbHMgYW5kIEhvbGlkYXlzIiwiYXBwTmFtZSI6IkFpU2Vuc3kiLCJjbGllbnRJZCI6IjY0OWQyZDk5YzI1MDM0MGJkODc0ZDUwYyIsImFjdGl2ZVBsYW4iOiJOT05FIiwiaWF0IjoxNjg4MDIyNDI2fQ.1BV3Gfoa2FIYK7CTBmdczQT7_HlCMlL9c__yqRKw8rQ'; // Replace with your actual API key
const campaignName = 'hello';
const destination = '+917207113553';
const userName = 'Sanjeev';
const source = 'Website lead';
const media = {
    url: 'https://example.com/image.jpg',
    filename: 'image.jpg'
};
const templateParams = ['param1', 'param2'];
const tags = ['tag1', 'tag2'];
const attributes = {
    attribute_name: 'attribute_value'
};

const payload = {
    apiKey,
    campaignName,
    destination,
    userName,
    source,
    media,
    templateParams,
    tags,
    attributes
};

axios.post('https://backend.api-wa.co/campaign/myoperator/api/v2', payload, {
    headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    console.log('Response:', response.data);
})
.catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
});
