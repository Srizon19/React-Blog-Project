import "./App.css";

function App() {
  // Accessing the environment variable
  // For Vite: import.meta.env.VITE_*
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <h2>React Project with Appwrite</h2>
    </>
  );
}

export default App;
