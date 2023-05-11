import TodoItems from "./components/TodoIItems";
import TodosFooter from "./components/TodosFooter";
import TodosForm from "./components/TodosForm";
import TodosHeader from "./components/TodosHeader";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <TodosHeader />
            <TodosForm />
            <TodoItems />
            <TodosFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
