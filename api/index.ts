import express from 'express';
import { createServer } from 'http';
import { storage } from '../server/storage';

const app = express();
app.use(express.json());

// API routes from your server/routes.ts
app.get('/api/categories', async (req, res) => {
  try {
    const categories = await storage.getCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
});

// Add other API routes here...

export default async (req: any, res: any) => {
  // Handle API Gateway event
  const { method, path, headers, body } = req;
  
  // Create a mock request/response for Express
  const request = {
    method,
    url: path,
    headers,
    body,
  };

  const response = {
    statusCode: 200,
    body: '',
    setHeader: (key: string, value: string) => {
      res.setHeader(key, value);
    },
    end: (data: any) => {
      if (data) {
        res.status(response.statusCode).send(data);
      } else {
        res.status(response.statusCode).end();
      }
    },
    json: (data: any) => {
      res.status(response.statusCode).json(data);
    },
    status: (code: number) => {
      response.statusCode = code;
      return response;
    }
  };

  // Handle the request with Express
  try {
    await app(request as any, response as any);
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
