import ApiHealthCheck from "@/components/ApiHealthCheck";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-3xl font-bold">AI Commerce Platform</h1>
      <p className="text-gray-600">
        Project foundation: Next.js frontend + Express API.
      </p>
      <ApiHealthCheck />
    </main>
  );
}
