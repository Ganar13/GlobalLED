import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ServicesType } from '../../types/ServicesType';
import './css/index.css';
import { Link } from 'react-router-dom';
type ServType = {
  serv: ServicesType;
};

export default function ModalPage({ serv }: ServType): JSX.Element {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="win_modal">
      <img className="imgMod" src={serv.img} onClick={toggle} style={{ cursor: 'pointer' }} />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <img className="imgOpMod" src={serv.img} alt="Изображение" />
          {serv.referense} <br />
          Цена: от {serv.price}₽
        </ModalBody>
        <ModalFooter>
          <Link to="/сontacts">
            <Button color="primary">Получить консультацию</Button>
          </Link>
          <Button color="danger" onClick={toggle}>
            Закрыть
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
