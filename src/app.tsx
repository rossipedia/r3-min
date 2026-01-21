import { createRoot, type Handle } from "@remix-run/component";

function App(handle: Handle) {
  let count = 0;

  return () => (
    <>
      <h1 class="text-3xl font-black">Hello Remix 3</h1>
      <p>Scratch pad</p>
      <button
        class="border border-solid border-gray-400 rounded bg-gray-200 active:translate-y-px px-2 py-1 shadow-sm active:shadow-none"
        on={{
          click: () => {
            count++;
            handle.update();
          },
        }}
      >
        {count}
      </button>
    </>
  );
}

createRoot(document.getElementById("app")!).render(<App />);
