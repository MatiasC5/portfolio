import { Routes, Route } from 'react-router-dom';
import { MainPage, Projects, NavBar } from '../src/components/index';
import { Error404 } from './components/Error404/Error404.';
import './index.css';

export const App = () => {
	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
		</div>
	);
};
