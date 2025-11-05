import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoThunk, allTodosThunk } from "../../features/todos/todosThunk";

export default function CreateTodo() {
  const [Newtodo, setNewTodo] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });

  const dispatch = useDispatch();
  const { loading, todos } = useSelector((state) => state.todos);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...Newtodo,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodoThunk(Newtodo));
    setNewTodo({
      title: "",
      description: "",
      isCompleted: false,
    });
  };

  useEffect(() => {
    dispatch(allTodosThunk());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Todo Manager</h2>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={Newtodo.title}
                onChange={handleChange}
                placeholder="Enter todo title"
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-600 transition-colors"
                required
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <input
                type="text"
                name="description"
                value={Newtodo.description}
                onChange={handleChange}
                placeholder="Enter todo description"
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-600 transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl"
              }`}
            >
              {loading ? "Adding..." : "Add Todo"}
            </button>
          </div>
        </form>

        {/* Todos Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-linear-to-r from-purple-600 to-indigo-700 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Description
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Status
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {todos && todos.length > 0 ? (
                todos.map((todo, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {todo.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {todo.description}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          todo.isCompleted
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {todo.isCompleted ? "Completed" : "Incomplete"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors mr-2">
                        Edit
                      </button>
                      <button className="px-4 py-1.5 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No todos yet. Add your first todo above!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
