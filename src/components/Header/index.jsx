import React from 'react';
import moment from 'moment';
import CountUp from 'react-countup';
import GithubCorner from 'react-github-corner';

import {
  Avatar,
  Container, 
  Card,
  CardsContainer,
  Profile 
} from './styles';

import { MdWork } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { BiCalendar } from 'react-icons/bi';

const Header = () => {
  const data = JSON.parse(sessionStorage.getItem('userData'));

  const {
    avatar_url,
    name, 
    bio, 
    login, 
    company, 
    location, 
    created_at,
    public_repos,
    followers,
    following,
    html_url
  } = data;

  return (
    <Container>
      <GithubCorner 
        href="https://github.com/fmm312/github-user-profile" 
        bannerColor="#1f6feb"
      />

      <Profile>
        <div className="header">
          <Avatar>
            <img src={avatar_url} alt="avatar" width={150} height={150} />
          </Avatar>
          <div className="header-card">
            <h2>{name}</h2>
            <span>
              <a href={html_url} target="_blank">
                @{login}
              </a>
            </span>
            <p>
              {bio ? bio : 'When that user enters a description it will appear here'}
            </p>
          </div>
        </div>

        <div className="infos-card">
          {company && (
            <span>
              <MdWork className="infos-card-icon" />
              {company}
            </span>
          )}

          {location && (
            <span>
              <GoLocation className="infos-card-icon" />
              {location}
            </span>
          )}
        
          <span>
            <BiCalendar className="infos-card-icon" />
            {`Joined ${moment(created_at).format("MMM")} 
            ${moment(created_at).format('DD')}, ${moment(created_at).format('YYYY')}`}
          </span>
        </div>

        <CardsContainer>
          <Card>
            <h4>
              <CountUp end={public_repos || 0} className="countNumber" />
            </h4>
            <span>Repositories</span>
          </Card>
          
          <Card>
            <h4>
              <CountUp end={followers || 0} className="countNumber" />
            </h4>
            <span>Followers</span>
          </Card>

          <Card>
            <h4>
              <CountUp end={following || 0} className="countNumber" />
            </h4>
            <span>Following</span>
          </Card>
        </CardsContainer>
      </Profile>
      
    </Container>
  );
}

export default Header;