import React from "react";
import moment from "moment/moment";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';

import './CardObject.scss';

export const CardObject = ({ card }) => {
  const media = useMediaQuery('(min-width: 760px)');
  return (
    <div className="card">
      {/* <div className="card__header card__grid-template">
        <span className="text card__title"></span>
        <span className="text card__title">Адрес</span>
        <span className="text card__title">Цена</span>
        <span className="text card__title">Тренд</span>
        <span className="text card__title">Реклама</span>
      </div> */}
      <div className={`card__top ${media ? 'card__grid-template' : 'card__flex'}`}>
        <img
          className="card__photo"
          src={card.photo} alt="object"
        />
        <span className="text card__centr-text">{card.type}, {card.address}</span>
        <span className="text card__centr-text">{card.price}т&#8381;</span>
        <span className="text card__centr-text">{card.trand}т&#8381;</span>
        <div className="card__wrap">
          cain
          centr
        </div>
      </div>
      <div className="card__bottom">
        <p className="card__text">Дата публикации:<span>{moment(card.date).locale('ru').format('DD MMMM YYYY')}</span></p>
        <Link to={`edit/${card.UID}`}>
          <Button size="small">
            редактировать
          </Button>
        </Link>
      </div>
    </div>
  )
}