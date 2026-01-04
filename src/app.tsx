import { createRoot, type Handle } from "@remix-run/component";

function App(this: Handle) {
  return (
    <>
      <h1 class="text-3xl font-black">Hello Remix 3</h1>
      <p>Scratch pad</p>
    </>
  );
}

createRoot(document.getElementById("app")!).render(<App />);
