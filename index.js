const express = require('express');

const app = express()

app.get('/', (request, response) => {
    readFile('./homestyles.html', 'utf8', (err, htmL) => {

        if(err) {
            response.status(500)
        }

        response.send(html);


    }) 

});



\\\\ijijijijniiininknnknknknnmnmnmmninbnbsesesseeeeeeediuahdiuuhuhfuhfu