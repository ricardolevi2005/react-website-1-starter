import { Header } from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

import './contact.css';

export const Contact = () => {
	return (
		<>
			<Header title='Get In Touch' image={HeaderImage}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
				cupiditate dolorem, ut, harum sequi officiis ipsam tempore omnis quae
				maxime eveniet libero quasi. Cum voluptates eos iste, dignissimos odit
				obcaecati!
			</Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:ricardolevi@dedaline.dev" target="_blank" rel='noreferrer noopener'><MdEmail/></a>
            <a href="http://m.me/1495434143" target="_blank" rel='noreferrer noopener'><BsMessenger/></a>
            <a href="https://wa.me/+5521999854134" target="_blank" rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
		</>
	);
};
