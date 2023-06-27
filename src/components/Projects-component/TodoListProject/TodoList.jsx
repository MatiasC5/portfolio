import todoList from '../../../assets/images/projects-images/todoList.png';
import htmlImg from '../../../assets/images/technologies-images/html-5.png'
import cssImg from '../../../assets/images/technologies-images/css-3.png'
import javascriptImg from '../../../assets/images/technologies-images/js.png'
import reactImg from '../../../assets/images/technologies-images/react.png'


export const TodoList = () => {
	return (
		<div className='todoList-project main-project'>
			<a href='https://matiasc5.github.io/todoList/' target='_blank'>
				<img src={todoList} alt='todoList-image' className='projects' />
			</a>
			<h1 style={{ color: 'white' }}>todoList</h1>
			<div className='icon-div'>
				<div className='html-icon-container'>
					<img src={htmlImg} alt={'html-image'} className='html-icon' />
				</div>
				<div>
					<img src={cssImg} alt={'css-image'} className='css-icon' />
				</div>
				<div>
					<img
						src={javascriptImg}
						alt={'javascript-image'}
						className='javascript-icon'
					/>
				</div>
				<div>
					<img src={reactImg} alt={'react-image'} className='react-icon' />
				</div>
			</div>
		</div>
	);
};
