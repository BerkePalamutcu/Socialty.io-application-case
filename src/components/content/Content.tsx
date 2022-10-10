import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchApiData } from '../../redux/slices/apiData';
import { nanoid } from '@reduxjs/toolkit';
import Moment from 'moment';
import Card from '../card/Card';
import avatar from '../../assets/images/avatar.png';
import spinner from '../../assets/images/spinner.gif';
import '../content/content.styles.scss';

const Content: React.FC<any> = () => {
  const dispatch = useAppDispatch();

  const apiData: any = useAppSelector((state) => state.apiData.cardDatas);
  const pending: any = useAppSelector((state) => state.apiData.loading);
  const errorMessage: any = useAppSelector((state) => state.apiData.error);

  console.log(apiData);

  React.useEffect(() => {
    dispatch(fetchApiData());
  }, []);

  return (
    <div className="contentContainer">
      <div className="topWrapper">
        <div className="colorCodes">
          <ul className="colorList">
            <li className="colorListItem">
              <div className="published"></div>Published
            </li>
            <li className="colorListItem">
              <div className="scheduled"></div>Scheduled
            </li>
            <li className="colorListItem">
              <div className="approval"></div>Need Approval
            </li>
            <li className="colorListItem">
              <div className="error"></div>Error
            </li>
            <li className="colorListItem">
              <div className="notes"></div>Notes
            </li>
          </ul>
        </div>
        <div className="avatar">
          <img className="avatar" src={avatar} alt="avatarImage" />
        </div>
      </div>
      <div className="postsByDateContainer">
        {pending && <img className="spinner" src={spinner} />}
        {errorMessage && <h1>{errorMessage}</h1>}
        {Object.entries<any>(apiData)
          .sort((a: any, b: any) => {
            return b > a ? 1 : b < a ? -1 : 0; //Sorting Algorithm to sort posts by their dates
          })
          .map(([date, value], index) => (
            <div className="cardsContainer" key={nanoid()}>
              <p className="dateHeader">{Moment(date).format('D MMMM Y')}</p>
              <div className="cardsWrapper">
                {value.map((item: any) => (
                  <Card key={nanoid()} item={item} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Content;
