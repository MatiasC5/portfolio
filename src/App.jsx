import { Info, Projects, NavBar } from '../src/components/index';
import './index.css';

export const App = () => {
	return (
		<main className='App'>
			<NavBar />
			<Info />
			<Projects />
		</main>
	);
};
