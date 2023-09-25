import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { imgThunk } from '../../redux/slices/PhotoSlice';
import OneCard from './OneCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './css/index.css';
import imgMap from './img/карта.png';
import imgCont from './img/контакты.svg';
import video from './img/IMG_4793.mp4';
import video2 from './img/IMG_4558.mp4';
import video3 from './img/video5197362284489355604.mp4';
import vk from './img/vk.png';
import insta from './img/insta.svg.webp';
import drive from './img/drive2.png';

export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const photo = useAppSelector((state) => state.photo);
  useEffect(() => {
    dispatch(imgThunk());
  }, []);

  return (
    <div className="content">
      <h4 className="main_text">
        Добро пожаловать в нашу студию Global LED.
        <br /> Мы предоставляем услуги по ремонту и тюнингу фар.
      </h4>
      <div className="video-container">
        <video autoPlay muted loop className="myVideo">
          <source src={video} type="video/mp4" className="vid" />
        </video>
        <video autoPlay muted loop className="myVideo">
          <source src={video2} type="video/mp4" className="vid" />
        </video>
        <video autoPlay muted loop className="myVideo">
          <source src={video3} type="video/mp4" className="vid" />
        </video>
      </div>
      <div className="contact_info">
        <h2>
          <img className="imgCont" src={imgCont}></img>Контакты
        </h2>
        <p>
          <img className="imgCont" src={imgMap}></img> Адрес: деревня Голиково, 55, Москва <br />{' '}
          Номера для консультации и записи: <br />
          Станислав: 8-999-800-71-09 <br />
          Парвиз: 8-977-328-84-76 <br />
          Тимур: 8-925-275-90-98
        </p>
        <a href="https://vk.com/globalled" target="_blank">
          <img className="vk" src={vk} />
        </a>
        <a href="https://www.drive2.ru/o/GlobalLED" target="_blank">
          <img className="drive" src={drive} />
        </a>
        <a
          href="https://instagram.com/globa1led?igshid=MzRlODBiNWFlZA==
"
          target="_blank"
        >
          <img className="insta" src={insta} />
        </a>
      </div>
      <div className="carusel">
        {' '}
        <h2 className="text_example"> Наши работы</h2>
        <div className="photo">
          <Carousel>
            {photo.map((el) => (
              <Carousel.Item key={el.id}>
                <OneCard img={el} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
