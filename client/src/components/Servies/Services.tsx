import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchServices } from '../../redux/slices/ServiceSlice';
import ModalPage from './ModalPage';
import './css/index.css';
function Services(): JSX.Element {
  const dispatch = useAppDispatch();
  const services = useAppSelector((state) => state.services.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <div className="mainMod">
      {services.map((el) => (
        <ModalPage key={el.id} serv={el} />
      ))}
    </div>
  );
}

export default Services;
