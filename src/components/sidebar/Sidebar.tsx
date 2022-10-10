import { useAppDispatch } from '../../redux/store';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { toggleAccordion } from '../../redux/slices/accordionSlice';
import '../sidebar/sidebar.styles.scss';
import { images } from '../../shared/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faComments,
  faPenToSquare,
} from '@fortawesome/free-regular-svg-icons';
import {
  faWaveSquare,
  faChalkboardTeacher,
  faChartLine,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const toggleState = useSelector(
    (state: any) => state.toggleAccordion.accordion
  );

  return (
    <div className="sidebarContainer">
      <div className="headerWrapper">
        <h1 className="header">
          sociality.<span className="linkSpan">io</span>
        </h1>
      </div>
      <div className="sidebarWrapper">
        <div className="brands">
          <div className="brandsWrapper">
            <ul className="brandsList">
              <span className="selectedBrand"></span>
              {Object.values(images[0]).map((item: any) => (
                <img key={nanoid()} className="brandImage" src={item} />
              ))}
              <div className="information">99</div>
            </ul>
          </div>
        </div>
        <div className="actions">
          <ul className="listActions">
            <li className="mainListItem">
              <div className="listWrapper">
                <FontAwesomeIcon
                  className="actionIcon fa-xl"
                  style={{ color: 'red' }}
                  icon={faBell}
                />
                <p className="listText">NOTIFICATIONS</p>
                <p className="notificationsNumber">29</p>
              </div>
            </li>
            <li className="mainListItem">
              <div className="listWrapper">
                <FontAwesomeIcon
                  className="actionIcon fa-lg"
                  style={{ color: 'red' }}
                  icon={faChalkboardTeacher}
                />
                <p className="listText">SUMMARY</p>
              </div>
              <div className="toggleWrapper">
                <FontAwesomeIcon
                  style={{ color: 'black' }}
                  className="toggleIcon fa-lg"
                  icon={faPlus}
                />
              </div>
            </li>
            <li
              className={toggleState ? 'mainListItem special' : 'mainListItem'}
            >
              <div className="listWrapper">
                <FontAwesomeIcon
                  className="actionIcon fa-lg"
                  style={
                    toggleState ? { color: 'white' } : { color: '#e35161' }
                  }
                  icon={faPenToSquare}
                />
                <p
                  className="listText"
                  onClick={() => dispatch(toggleAccordion(!toggleState))}
                >
                  PUBLISH
                </p>
              </div>
              <div className="toggleWrapper">
                <FontAwesomeIcon
                  onClick={() => dispatch(toggleAccordion(!toggleState))}
                  style={{ color: 'black' }}
                  className="toggleIcon fa-lg"
                  icon={toggleState ? faMinus : faPlus}
                />
              </div>
            </li>
            {toggleState && (
              <div className="listContent">
                <ul>
                  <li className="listContentItem">Compose</li>
                  <li
                    style={{ color: '#e35161', fontWeight: '600' }}
                    className="listContentItem"
                  >
                    Feed
                  </li>
                </ul>
              </div>
            )}
            <li className="mainListItem">
              <div className="listWrapper">
                <FontAwesomeIcon
                  className="actionIcon fa-lg"
                  style={{ color: 'red' }}
                  icon={faComments}
                />
                <p className="listText">ENGAGE</p>
              </div>
              <div className="toggleWrapper">
                <FontAwesomeIcon
                  style={{ color: 'black' }}
                  className="toggleIcon fa-lg"
                  icon={faPlus}
                />
              </div>
            </li>
            <li className="mainListItem">
              <div className="listWrapper">
                <FontAwesomeIcon
                  className="actionIcon fa-lg"
                  style={{ color: 'red' }}
                  icon={faWaveSquare}
                />
                <p className="listText"> LISTEN</p>
              </div>
              <div className="toggleWrapper">
                <FontAwesomeIcon
                  style={{ color: 'black' }}
                  className="toggleIcon fa-lg"
                  icon={faPlus}
                />
              </div>
            </li>
            <li className="mainListItem">
              <div className="listWrapper">
                <FontAwesomeIcon
                  className="actionIcon fa-lg"
                  style={{ color: 'red' }}
                  icon={faChartLine}
                />
                <p className="listText"> REPORT</p>
              </div>
              <div className="toggleWrapper">
                <FontAwesomeIcon
                  style={{ color: 'black' }}
                  className="toggleIcon fa-lg"
                  icon={faPlus}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
