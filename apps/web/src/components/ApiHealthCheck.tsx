"use client";

import { useEffect, useState } from "react";
import type { HealthResponse } from "@acp/shared";
import { apiFetch } from "@/lib/api";

type Status = "loading" | "connected" | "disconnected";

export default function ApiHealthCheck() {
  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    apiFetch<HealthResponse>("/api/health")
      .then((data) => {
        if (cancelled) return;
        setStatus("connected");
        setMessage(`${data.message} (${data.timestamp})`);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setStatus("disconnected");
        setError(err instanceof Error ? err.message : String(err));
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "loading") {
    return (
      <div className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-600">
        Checking API connection...
      </div>
    );
  }

  if (status === "connected") {
    return (
      <div className="rounded-lg border border-green-300 bg-green-50 px-4 py-3 text-green-800">
        <p className="font-semibold">API connected</p>
        <p className="text-sm">{message}</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-red-800">
      <p className="font-semibold">API not connected</p>
      <p className="text-sm">{error}</p>
      <p className="text-sm">Start the API with: npm run dev:api</p>
    </div>
  );
}
