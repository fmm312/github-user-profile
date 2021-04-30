import { useEffect, useState } from 'react';

import {
  ButtonFilter,
  GoToRepoButton,
  Container,
  Card,
  CardContainer,
  Filter,
  Title
} from './styles';

import { AiOutlineStar } from 'react-icons/ai';
import { VscRepoForked } from 'react-icons/vsc';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { BiLinkExternal } from 'react-icons/bi';

const Repositories = () => {
  const [topRepositories, setTopRepositories] = useState([]);
  const [sortType, setSortType] = useState('stars');

  useEffect(() => getTopRepos(sortType), [sortType]);

  const getTopRepos = (type) => {
    const LIMIT = 9;
    const repositories = JSON.parse(sessionStorage.getItem('userRepositories'));

    const map = {
      stars: 'stargazers_count',
      forks: 'forks_count',
      size: 'size',
    };
   
    const sortProperty = map[type];
    const sorted = repositories
      .filter(repo => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, LIMIT);

      setTopRepositories(sorted);
  };

  function repositorieColor(value) {
    switch (value) {
      case 'HTML':
        return '#db6d28'
      case 'JavaScript':
        return '#f2cc60'
      case 'CSS':
        return '#1158c7'
      case 'Java':
        return '#06d6a0'
      default: 
        return '#db6d28'
    }
  }

  const ACTIVE_BUTTON_STYLE = {
    background: '#1f6feb', 
    color: '#fff',
    border: '2px solid #1f6feb'
  }

  function goToRepositorie(url) {
    window.open(url);
  }
  
  return (
    <Container>
      <Title>Main repositories</Title>
    
      <Filter>
        <ButtonFilter 
          style={
            sortType === 'stars' ? 
            ACTIVE_BUTTON_STYLE
            : {}
          }
          onClick={() => setSortType('stars')}
        >
          Stars
        </ButtonFilter>

        <ButtonFilter
          style={
            sortType === 'forks' ? 
            ACTIVE_BUTTON_STYLE
            : {}
          }
          onClick={() => setSortType('forks')}
        >
          Forks
        </ButtonFilter>

        <ButtonFilter
          style={
            sortType === 'size' ? 
            ACTIVE_BUTTON_STYLE
            : {}
          }
          onClick={() => setSortType('size')}
        >
          Size
        </ButtonFilter>
      </Filter>

      <CardContainer>
        {topRepositories.map((item) => (
          <Card onClick={() => goToRepositorie(item?.html_url)}>
            <div className="card-header">
              <h2>
                <RiGitRepositoryLine className="card-icon" />
                {item?.name}
              </h2>
              <p>{item?.description}</p>
            </div>

            <div className="card-footer">
              <p>
                <div 
                  className="card-circle-color"
                  style={{ background: repositorieColor(item?.language) }}
                />
                {item?.language ? item?.language : 'Outros'}
              </p>
              <p>
                <AiOutlineStar className="card-icon" />
                {item?.stargazers_count}
              </p>
              <p>
                <VscRepoForked className="card-icon" />
                {item?.forks_count}
              </p>
            </div>
          </Card>
        ))}
      </CardContainer>
      
      {/* <GoToRepoButton>
        <a href="">
          Go to Github
          <BiLinkExternal className="linkExternal" />
        </a>
      </GoToRepoButton> */}
    </Container>
  );
}

export default Repositories;