import { useState } from 'react'
import './App.css'

function App() {
  const [inp, setInp] = useState("")
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState("")
  const [editIndex, setEditIndex] = useState(null)



  const addTodo = () => {
    if (inp.trim() === "") {
      setError("Please Enter a task!")
      return
    }
    if (editIndex === null) {
      setTasks([...tasks, inp])

    }
    else {
      let updateTasks = [...tasks]
      updateTasks[editIndex] = inp
      setTasks(updateTasks)
      setEditIndex(null)
    }
    setInp("")
    setError("")

  }

  const updateTodo = (index) => {
    setInp(tasks[index])
    setEditIndex(index)
  }


  const deleteTodo = (index) => {
    let updateTasks = tasks.filter((value, i) => i != index)
    setTasks(updateTasks)

  }

  return (
    <div className="flex flex-col items-center justify-center gap-10 min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mt-5 capitalize animate-bounce">
        Welcome to Todo Website!
      </h1>

      <div className="w-[90%] md:w-[60%] bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6">
        {/* Input */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <input
              type="text"
              className="w-4/5 h-10 rounded-md px-3 text-lg border border-gray-300"
              placeholder="Enter a task..."
              onChange={(e) => setInp(e.target.value)}
              value={inp}
            />
            <button className="w-1/5 h-10 rounded-md bg-blue-500 text-white text-sm md:text-base hover:bg-blue-600 transition"
              onClick={addTodo}>
              {editIndex === null ? "Add Todo" : "Save"}
            </button>
          </div>
          {error && <p className="text-red-500 text-base">{error}</p>}
        </div>

        {/* Tasks */}
        <div className="flex flex-col gap-4">


          <ol className="flex flex-col gap-4">
            {
              tasks.length === 0 ? (
                <p className="text-center text-xl font-medium text-gray-700">
                  No tasks added yet{" "}
                  <span className="animate-pulse text-2xl">...</span>
                </p>
              ) : (


                tasks.map((todo, index) => {


                  return (
                    <li key={index} className="flex items-center gap-4 bg-gray-200 p-3 rounded-lg shadow-md">
                      <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                      <span className="flex-1 text-lg text-center transition-transform hover:scale-110">
                        {todo}
                      </span>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                        onClick={() => updateTodo(index)}>
                        Update
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                        onClick={() => deleteTodo(index)}>
                        Delete
                      </button>
                    </li>
                  )
                })
              )
            }



          </ol>
        </div>
      </div>
    </div>
  );
}

export default App
