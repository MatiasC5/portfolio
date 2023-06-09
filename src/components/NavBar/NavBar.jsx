import './NavBar.css';

const MailTo = ({ mailto, label }) => {
	return (
		<a
			href={mailto}
			onClick={(e) => {
				e.preventDefault();
				window.location.href = mailto;
			}}
		>
			{label}
		</a>
	);
};

export const NavBar = () => {
	return (
		<header>
			<nav className='menu'>
				<a
					href='https://www.linkedin.com/in/matias-cardoso-053052237/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Linkedin
				</a>
				<a
					href='https://github.com/MatiasC5'
					target='_blank'
					rel='noopener noreferrer'
				>
					Github
				</a>
				<MailTo mailto='mailto:cardosomatias1994@gmail.com' label='Email' />
			</nav>
		</header>
	);
};
