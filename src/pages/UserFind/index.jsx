import { useState } from 'react';
import axios from 'axios';
import { 
  Container,
  FindButton,
  TextField,
  Title
} from './styles';

import { VscGithub } from 'react-icons/vsc';
import { FiAlertCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

const UserFind = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState('');

  async function getUserData() {
    setLoading(true);

    await axios.get(`https://api.github.com/users/${userName}`)
    .then(({ data }) => {
      sessionStorage.setItem('userData', JSON.stringify(data));
      getRepositories();
    })
    .catch(() => {
      setError(true);
      setLoading(false);
    })
  }

  async function getRepositories() {
    setLoading(true);

    await axios.get(`https://api.github.com/users/${userName}/repos`)
    .then(({ data }) => {
      sessionStorage.setItem('userRepositories', JSON.stringify(data));
      history.push('/profile');
    })
    .catch(() => {
      setError(true);
      setLoading(false);
    })
    .finally(() => {
      setLoading(false);
    })
  }

  function goToProfile() {
    getUserData();
  }

  function onChangeUserName(event) {
    setUserName(event.target.value);
  }

  return (
    <Container>
      <VscGithub className="icon" />

      <Title>
        Find a profile on GitHub
      </Title>

      <div>
        <TextField 
          type="text"
          value={userName}
          onChange={onChangeUserName}
        />

        <FindButton onClick={goToProfile}>
          {loading ? (
            <div className="loader" />
          ) : 'Find now'}
        </FindButton>
      </div>

      {error && (
        <p className="error-message">
          <FiAlertCircle className="error-message-icon" /> User not found
        </p>
      )}
    </Container>
  );
}

export default UserFind;