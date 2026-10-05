import "dotenv/config";
import app from "./app";

const port = Number(process.env.API_PORT) || 4000;

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
  console.log(`Health check: http://localhost:${port}/api/health`);
});
