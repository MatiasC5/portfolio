import animeru from '../../../assets/images/projects-images/animeru.jpg'
import htmlImg from '../../../assets/images/technologies-images/html-5.jpg'
import cssImg from '../../../assets/images/technologies-images/css-3.jpg'
import javascriptImg from '../../../assets/images/technologies-images/js.jpg'

export const Animeru = () => {
	return (
		<div className='animeru-project main-project'>
			<a href='https://matiasc5.github.io/animeru/' target='_blank'>
				<img src={animeru} alt='animeru-image' className='projects' />
			</a>
			<h1 style={{ color: 'red' }}>Animeru</h1>
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
			</div>
		</div>
	);
};
