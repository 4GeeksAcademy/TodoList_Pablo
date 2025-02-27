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

	function removeTask(id){
		setTasks(tasks.filter(task => task.id !== id))
	} // Función para eliminar las tareas, se enlaza a TaksList y luego a ItemList

	return(
		<>
			<div className="container mt-5">
				< TaksForm onAddTask={addTasks} /> {/*  <Input> para escribir las tareas */}
				< TaksList tasks={tasks} onDelete={removeTask} /> {/* Zona donde se imprime los datos capturados del <Input> */}
			</div>
		</>
	)
};

export default Home;