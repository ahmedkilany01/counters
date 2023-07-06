import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Counter pass_value={1} />
      <Counter pass_value={2} />
      <Counter pass_value={3} />
    </div>
  );
}

export default App;
