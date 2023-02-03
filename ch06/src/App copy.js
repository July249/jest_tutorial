import "./App.css";
import Hello from "./components/Hello";

const user = {
  name: "Mike",
  age: 30,
};

function App() {
  return (
    <div className="App">
      <Hello user={user} />
    </div>
  );
}

export default App;
