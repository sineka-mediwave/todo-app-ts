import { ITodo } from "../types";

interface ITodoList {
  todos: ITodo[];
  extraCss?: string;
  handleDelete: (n: Number) => void;
}

const TodoList: React.FC<ITodoList> = ({ todos, handleDelete }) => {
  return (
    <div>
      {todos.map((t) => (
        <div className="input-group-text justify-content-between mb-3 col-sm-6">
          <div>
            <input type="checkbox" key={t.id.toString()} />
            <span
              className="px-3"
              // style={t.isDone ? { textDecoration: "line-through" } : {}}
            >
              {t.text}
            </span>
          </div>
          <div>
            <button
              className="btn btn-outline-secondary btn-sm mx-2"
              onClick={() => handleDelete(t.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
