import { Router } from "express";
import type { HealthResponse } from "@acp/shared";

const healthRouter = Router();

healthRouter.get("/health", (_req, res) => {
  const response: HealthResponse = {
    status: "ok",
    message: "API is healthy",
    timestamp: new Date().toISOString(),
  };
  res.json(response);
});

export default healthRouter;
