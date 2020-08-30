import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  FaGithub,
  FaCheckCircle,
  FaTwitter,
  FaArrowCircleDown,
} from 'react-icons/fa';

import Button from '../components/Button';

import TicketVertical from '../assets/ticket-vertical.svg';

import {
  Container,
  TicketData,
  UserTicket,
  GithubUserData,
  SocialMedia,
} from '../styles/pages/Ticket';

interface GithubUser {
  name: string;
  login: string;
  avatar_url: string;
}

const Ticket: React.FC = () => {
  const router = useRouter();
  const { username } = router.query;

  const [githubUser, setGithubUser] = useState<GithubUser>({} as GithubUser);

  useEffect(() => {
    async function getGithubUser() {
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
      );

      setGithubUser(response.data);
    }

    getGithubUser();
  }, [username]);

  return (
    <Container>
      <TicketData>
        <h1>
          You're in.
          <br />
          Make it unique.
        </h1>

        <p>Generate a unique ticket image with your GitHub profile.</p>

        <div className="github-user-data">
          <FaGithub />
          <span>{githubUser.login}</span>
          <FaCheckCircle className="check-icon" />
        </div>

        <span>Only public info will be used.</span>
      </TicketData>

      <UserTicket>
        <div className="ticket-container">
          <TicketVertical />

          <GithubUserData>
            <img src={githubUser.avatar_url} alt={githubUser.name} />

            <div>
              <h3>{githubUser.name}</h3>

              <p>
                <FaGithub />
                <span>{githubUser.login}</span>
              </p>
            </div>
          </GithubUserData>

          <SocialMedia>
            <Button>
              <FaTwitter />
              Tweet it!
            </Button>

            <Button>
              <FaArrowCircleDown />
              Download
            </Button>
          </SocialMedia>
        </div>
      </UserTicket>
    </Container>
  );
};

export default Ticket;
