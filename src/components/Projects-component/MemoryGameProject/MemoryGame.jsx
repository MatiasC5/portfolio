import memoryGame from '../../../../assets/images/projects-images/memory-game.jpg';
import htmlImg from '../../../../assets/images/technologies-images/html-5.jpg'
import cssImg from '../../../../assets/images/technologies-images/css-3.jpg'
import javascriptImg from '../../../../assets/images/technologies-images/js.jpg'
import '../Projects.css';

export const MemoryGame = () => {
	return (
		<>
			<div className='memory-game-project main-project'>
				<a
					href='https://matiasc5.github.io/TheWicherMemoryGame.github.io/'
					target='_blank'
				>
					<img src={memoryGame} alt='memory-game-image' className='projects' />
				</a>
				<h1>The Witcher Memory Game</h1>
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
		</>
	);
};
