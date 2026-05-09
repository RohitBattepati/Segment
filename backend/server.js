const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const PORT = 3000;

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get('/', (req, res) => {
  console.log('GET ROUTE METHOD HIT');
  res.send('Backend is working');
});

app.post('/item', async (req, res) => {
  try {
    console.log('POST ROUTE HIT');
    console.log(req.body);

    const todo = req.body.todo;

    const response = await client.responses.create({
      model: 'gpt-5.2',
      instructions:
        'Break the given todo into short, actionable subtasks. Return only a JSON array of strings.',
      input: todo,
    });

    res.send({
      message: 'Subtasks generated successfully',
      data: response.output_text,
    });
  } catch (error) {
    console.error('openai api error:', error);

    res.status(500).send({
      message: 'Failed to generate tasks',
    });
  }
});

app.listen(PORT, () => {
  console.log('BACKEND IS GETTING CALLED');
});
