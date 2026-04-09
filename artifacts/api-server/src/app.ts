import express, { Express, Request, Response } from "express";

const app: Express = express();

app.use(express.json());

// Root endpoint
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Red Hen Café API is running!" });
});

// Health check
app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

// Menu
app.get("/api/menu", (req: Request, res: Response) => {
  res.json({
    items: [
      { id: 1, name: "Coffee", price: 3.5 },
      { id: 2, name: "Bread", price: 5.99 },
      { id: 3, name: "Pastry", price: 4.99 },
    ],
  });
});

// Export for Vercel
export default app;
