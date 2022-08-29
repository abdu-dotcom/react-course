import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo text="Learn React" number="1" description="Lorem 1"/>
      <Todo text="Master React" number="2" description="Lorem 2"/>
      <Todo text="Explore the full React course" number="3"  description="Lorem 3"/>
    </div>
  );
}

export default App;
