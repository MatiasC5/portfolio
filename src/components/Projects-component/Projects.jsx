import { Animeru, Calculator, Pokedex, MemoryGame, TodoList } from './';
import './Projects.css';

export const Projects = () => {
	return (
		<section className='projects-container'>
			<h2 className='projects-title'>PROYECTOS</h2>
			<section className='project-section '>
				<MemoryGame />
				<Calculator />
				<Pokedex />
				<Animeru />
				<TodoList />
			</section>
		</section>
	);
};
