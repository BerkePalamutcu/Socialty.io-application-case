import React from 'react';
import '../card/card.styles.scss';
import Moment from 'moment';
import { colorcodes } from '../../shared/colors';
import { mediaIcons, actionIcons } from '../../shared/icons';
import { urlCleaner, urlFinder } from '../../pipes/urlFinder';
import defaultCardImage from '../../assets/images/no-post-image.png';
import likeIcon from '../../assets/images/likeIcon.png';
import shareIcon from '../../assets/images/shareIcon.png';
import chatBaloonIcon from '../../assets/images/chatBaloonIcon.png';
import viewIcon from '../../assets/images/viewIcon.png';

const Card: React.FC<any> = ({ item }) => {
  const handleBrokenImage = (event: any) => {
    event.target.src = defaultCardImage;
  };

  return (
    <div className="card">
      <div
        style={{
          backgroundColor: `${colorcodes[Number(item.status)]}`,
        }}
        className="cardPostColor"
      >
        <img
          className={
            item.account.channel === 'instagrambusiness' ? '' : 'mediaIcon'
          }
          src={mediaIcons[`${item?.account?.channel}`]}
        />
      </div>
      <div className="cardContent">
        <div className="cardTopWrapper">
          <div className="cardActionDate">
            <p className="cardTime">
              {Moment(item.updated_at).format('D MMMM Y')} - {''}
              {Moment(item.updated_at).format('h:mm')}
            </p>
          </div>
          <div className="cardActionIcons">
            {item.status === 1 ? (
              <img
                className="cardActionIcon"
                src={actionIcons.prohibitedIcon}
              />
            ) : item.status === 0 ? (
              <img className="cardActionIcon" src={actionIcons.tickIcon} />
            ) : null}

            <img className="cardActionIcon" src={actionIcons.deleteIcon} />
            <img className="cardActionIcon" src={actionIcons.extrasIcon} />
          </div>
        </div>
        <div className="cardText">
          <p className="cardTextContent">
            {urlCleaner(item.entry.message)}
            <span>
              <a href={urlFinder(item.entry.message)} className="url">
                {urlFinder(item.entry.message)}
              </a>
            </span>
          </p>
        </div>
        <div className="cardImageWrapper">
          <a href={item.account.link} target="_blank">
            <img
              className="cardImage"
              onError={handleBrokenImage}
              src={item.entry.image}
              alt={item.account.name}
            />
          </a>
        </div>
        <div className="statisticsIcons">
          <div className="iconWrapper">
            <img className="bottomIcon" src={likeIcon} />
            <p className="statistics">0</p>
          </div>
          <div className="iconWrapper">
            <img className="bottomIcon" src={shareIcon} />
            <p className="statistics">0</p>
          </div>
          <div className="iconWrapper">
            <img className="bottomIcon" src={chatBaloonIcon} />
            <p className="statistics">0</p>
          </div>
          <div className="iconWrapper">
            <img className="bottomIcon" src={viewIcon} />
            <p className="statistics">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
