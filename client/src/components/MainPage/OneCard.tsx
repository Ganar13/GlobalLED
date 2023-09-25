import React from 'react';
import { photoType } from '../../types/PhotoType';
import './css/index.css';


type ImgType = {
  img: photoType;
};

function OneCard({ img }: ImgType) {
  return (
    <div>
      <img className="image_onecard_gallary" src={img.img}></img>
    </div>
  );
}

export default OneCard;
