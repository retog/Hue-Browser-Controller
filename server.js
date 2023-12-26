import { serveDir } from "https://deno.land/std@0.210.0/http/file_server.ts";
import { fromFileUrl } from "https://deno.land/std@0.210.0/path/mod.ts";

Deno.serve((req) => {
  const pathname = new URL(req.url).pathname;
  if (pathname.startsWith("/cgi-bin/")) {
    // Do dynamic responses
    return new Response();    
  }
  return serveDir(req, {
    fsRoot: fromFileUrl(import.meta.resolve("./web/")),
  });
  
});