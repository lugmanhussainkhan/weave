import { Button } from "./components/ui/button";

export default function App() {
  return (
    <main>
      <nav className="h-14 border-b">
        <div className="flex items-center justify-between px-4 h-full max-w-3xl mx-auto">
          <h1 className="font-mono">map_out</h1>
          <Button variant={"secondary"} size={"sm"}>
            New chat
          </Button>
        </div>
      </nav>
    </main>
  );
}
