import React, {useState} from "react";
import TaksForm from "./components/WriteTaks"
import TaksList from "./components/TaksList"

function Home() {
	const [tasks, setTasks] = useState ([]);

	function addTasks (title) { //Función para capturar el contenido del <Input> y
		const newTask = {		//Posteriormente imprimirlo
			id: Date.now(),
			title
		};

		setTasks([...tasks, newTask])
	}

	function removeTask(id) {
		setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
	}
 // Función para eliminar las tareas, se enlaza a TaksList y luego a ItemList

	function removeAllWithForEach() {
		tasks.forEach((task) => {;
			removeTask(task.id);
		});
	}
	// Función para eliminar todas la tareas

	return(
		<>
			<div className="container mt-5">
				< TaksForm onAddTask={addTasks} /> {/*  <Input> para escribir las tareas */}
				<button onClick={removeAllWithForEach}>Borrar Todo</button> {/*  BUTTON PARA BORRAR TODO (PARA OTRO PROYECTO) */}
				< TaksList tasks={tasks} onDelete={removeTask} /> {/* Zona donde se imprime los datos capturados del <Input> */}
			</div>
		</>
	)
};

export default Home;