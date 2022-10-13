import { Header } from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import './about.css';

export const About = () => {
	return (
		<>
			<Header title='About Us' image={HeaderImage}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo non
				nemo hic ipsa possimus vel adipisci consequatur tempore voluptas.
			</Header>

			<section className='about__story'>
				<div className='container about__story-container'>
					<div className='about__section-image'>
						<img src={StoryImage} alt='Our Story' />
					</div>
					<div className='about__section-content'>
						<h1>Our Story</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
							labore impedit, nesciunt dolores dolorem a illum molestias hic
							reprehenderit recusandae assumenda, maiores fugit, fuga nulla
							delectus nisi illo ipsam ullam ipsa iure rerum cumque veritatis.
							Sint rerum distinctio vero, cupiditate reprehenderit, non beatae
							aliquid omnis aperiam dolorum amet, sunt debitis.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
							sint aut rerum ad consequatur eius. Unde ab et quos ratione dolor
							veniam ex, dolore exercitationem provident quod aut ipsam tenetur
							assumenda eos accusantium? Tempora incidunt ad earum quaerat modi
							sunt, voluptatibus dignissimos unde quod? Sed optio vel tempora
							animi provident?
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
							quibusdam error architecto expedita sunt praesentium
							exercitationem dicta sint, ipsam consectetur eligendi aperiam
							eveniet necessitatibus sed quia numquam incidunt placeat deserunt!
						</p>
					</div>
				</div>
			</section>

			<section className='about__vision'>
				<div className='container about__vision-container'>
					<div className='about__section-content'>
						<h1>Our Vision</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
							labore impedit, nesciunt dolores dolorem a illum molestias hic
							reprehenderit recusandae assumenda, maiores fugit, fuga nulla
							delectus nisi illo ipsam ullam ipsa iure rerum cumque veritatis.
							Sint rerum distinctio vero, cupiditate reprehenderit, non beatae
							aliquid omnis aperiam dolorum amet, sunt debitis.
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
							quibusdam error architecto expedita sunt praesentium
							exercitationem dicta sint, ipsam consectetur eligendi aperiam
							eveniet necessitatibus sed quia numquam incidunt placeat deserunt!
						</p>
					</div>
					<div className='about__section-image'>
						<img src={VisionImage} alt='Our Vision' />
					</div>
				</div>
			</section>

      			<section className='about__mission'>
				<div className='container about__mission-container'>
					<div className='about__section-image'>
						<img src={MissionImage} alt='Our Mission' />
					</div>
					<div className='about__section-content'>
						<h1>Our Mission</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
							labore impedit, nesciunt dolores dolorem a illum molestias hic
							reprehenderit recusandae assumenda, maiores fugit, fuga nulla
							delectus nisi illo ipsam ullam ipsa iure rerum cumque veritatis.
							Sint rerum distinctio vero, cupiditate reprehenderit, non beatae
							aliquid omnis aperiam dolorum amet, sunt debitis.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
							sint aut rerum ad consequatur eius. Unde ab et quos ratione dolor
							veniam ex, dolore exercitationem provident quod aut ipsam tenetur
							assumenda eos accusantium? Tempora incidunt ad earum quaerat modi
							sunt, voluptatibus dignissimos unde quod? Sed optio vel tempora
							animi provident?
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
							quibusdam error architecto expedita sunt praesentium
							exercitationem dicta sint, ipsam consectetur eligendi aperiam
							eveniet necessitatibus sed quia numquam incidunt placeat deserunt!
						</p>
					</div>
				</div>
			</section>
		</>
	);
};
