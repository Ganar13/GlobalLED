import Karta from './Karta';
import './css/index.css';
import imgMap from '../MainPage/img/карта.png';
import imgCont from '..//../components/MainPage/img/контакты.svg';
import vk from '../MainPage/img/vk.png';
import insta from '../MainPage/img/insta.svg.webp';
import drive from '../MainPage/img/drive2.png';

function Contact() {
  return (
    <div>
      <div className="contact">
        <div className="contactsMain_one">
          <img src={imgCont} />
          Контакты
          <p className="text_contact">Станислав: 8-999-800-71-09</p>
          <p className="text_contact">Парвиз: 8-977-328-84-76</p>
          <p className="text_contact">Тимур: 8-925-275-90-98</p>
        </div>
        <div className="contactsMain_two">
          <img src={imgMap} />
          Адрес <br /> деревня Голиково, дом 55
        </div>
        <div className="logos">
          <a href="https://vk.com/globalled" target="_blank">
            <img className="vk" src={vk} />
          </a>
          <a href="https://www.drive2.ru/o/GlobalLED" target="_blank">
            <img className="drive" src={drive} />
          </a>
          <a href="https://instagram.com/globa1led?igshid=MzRlODBiNWFlZA==" target="_blank">
            <img className="insta" src={insta} />
          </a>
        </div>
      </div>

      <div className="contactsMap">
        <Karta />
      </div>
    </div>
  );
}

export default Contact;
