import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

// Example API route
router.get("/", (req: Request, res: Response): void => {
  res.json({
    message: "Welcome to Red Hen Café API",
    version: "1.0.0",
  });
});

// Menu endpoint
router.get("/menu", (req: Request, res: Response): void => {
  res.json({
    items: [
      {
        id: 1,
        name: "Fresh Baked Bread",
        price: 5.99,
        category: "bakery",
      },
      {
        id: 2,
        name: "Espresso",
        price: 3.5,
        category: "coffee",
      },
      {
        id: 3,
        name: "Pastry",
        price: 4.99,
        category: "bakery",
      },
    ],
  });
});

// Gallery endpoint
router.get("/gallery", (req: Request, res: Response): void => {
  res.json({
    images: [
      {
        id: 1,
        title: "Coffee Setup",
        url: "/images/coffee.jpg",
      },
      {
        id: 2,
        title: "Bakery",
        url: "/images/bakery.jpg",
      },
    ],
  });
});

export default router;
