import { Link } from 'react-router-dom';

import './notFound.css';

export const NotFound = () => {
	return (
		<section>
			<div className='container notfound__container'>
				<h2>Page Not Found</h2>
        <Link to='/home' className='btn'>Go Back Home</Link>
			</div>
		</section>
	);
};
