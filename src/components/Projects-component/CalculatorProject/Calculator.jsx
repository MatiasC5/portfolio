import calculator from '../../../assets/images/projects-images/calculator.png';
import htmlImg from '../../../assets/images/technologies-images/html-5.png'
import cssImg from '../../../assets/images/technologies-images/css-3.png'
import javascriptImg from '../../../assets/images/technologies-images/js.png'


export const Calculator = () => {
	return (
		<div className='calculator-project main-project'>
			<a href='https://matiasc5.github.io/calculator/' target='_blank'>
				<img src={calculator} alt='calculator-image' className='projects' />
			</a>
			<h1 style={{ color: 'violet' }}>Calculator</h1>
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
