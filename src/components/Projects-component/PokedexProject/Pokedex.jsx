import pokedex from '../../../../assets/images/projects-images/pokedex.jpg';
import htmlImg from '../../../../assets/images/technologies-images/html-5.jpg'
import cssImg from '../../../../assets/images/technologies-images/css-3.jpg'
import javascriptImg from '../../../../assets/images/technologies-images/js.jpg'

export const Pokedex = () => {
	return (
		<div className='pokedex-project main-project'>
			<a href='https://matiasc5.github.io/Pokedex.github.io/' target='_blank'>
				<img src={pokedex} alt='pokedex-image' className='projects' />{' '}
			</a>
			<h1 style={{ color: 'orange' }}>Pokedex</h1>
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
