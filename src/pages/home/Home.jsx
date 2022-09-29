import { MainHeader } from '../../components/MainHeader';
import { Programs } from '../../components/Programs';
import { Values } from '../../components/Values';
import { FAQs } from '../../components/FAQs';

import './home.css';

export const Home = () => {
	return (
		<>
			<MainHeader />
			<Programs />
			<Values />
			<FAQs />
		</>
	);
};
