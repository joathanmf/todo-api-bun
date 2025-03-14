export function errorHandler(error: Error): Response {
  console.error("Server error:", error);
  return new Response("Internal server error", { status: 500 });
}
