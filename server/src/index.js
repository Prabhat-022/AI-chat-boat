// Ai chatBoat 

const express = require('express');
//openAI modile start  with
const OPENAI_API_KEY = "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";
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


//  openai.listEngines().then ((response) =>{
//     console.log(response);
//  });

//openAI modile finish 


const app = express();
app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
    res.json({
        message: "pong",
    });
});

// responsing the ans and question both 
app.post("/chat", (req, res) => {
    const question = req.body.question;

    openai.createCompletion({
        model: "text-davinci-003",
        prompt: question,
        max_tokens: 4000,
        temperature: 0,
    }).then(response => {
        console.log({ response }); 
        return response?.data?.choices?.[0]?.text;
    }).then((answer) => {
        console.log({ answer });
        const array = answer?.split("\n").filter((value) => value).map((value) => value.trim());
        return array;
    })
        .then((answer) => {
            res.json({
                answer: answer,
                propt: question,
            });

        })

    console.log({ question });


});

app.listen(3000, () => {
    console.log("server is listening on port 3000");

})