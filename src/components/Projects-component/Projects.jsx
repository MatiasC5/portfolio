import { Animeru, Calculator, MemoryGame, Pokedex, TodoList } from './index';
import './Projects.css';

export const Projects = () => {
	return (
		<section className='projects-container'>
			<h2 className='projects-title'>PROYECTOS</h2>
			<section className='project-section '>
				<Animeru />
				<Calculator />
				<MemoryGame />
				<Pokedex />
				<TodoList />
			</section>
		</section>
	);
};
