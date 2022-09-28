import { MainHeader } from '../../components/MainHeader';
import { Programs } from '../../components/Programs';
import { Values } from '../../components/Values';

import './home.css';

export const Home = () => {
	return (
		<>
			<MainHeader />
			<Programs />
			<Values />
		</>
	);
};
