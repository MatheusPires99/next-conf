import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaCheckCircle,
  FaTwitter,
  FaArrowCircleDown,
  FaLinkedin,
} from 'react-icons/fa';
import { useTheme } from 'styled-components';

import Button from '../components/Button';
import TicketVertical from '../assets/ticket-vertical.svg';
import TicketHorizontal from '../assets/ticket-horizontal.svg';

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
  const { animation } = useTheme();
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
      <div className="ticket-support">
        <TicketHorizontal />
      </div>

      <TicketData>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={animation.variants}
          transition={{
            duration: animation.duration,
            delay: 0.4,
            ease: animation.ease,
          }}
        >
          You're in.
          <br />
          Make it unique.
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={animation.variants}
          transition={{
            duration: animation.duration,
            delay: 0.8,
            ease: animation.ease,
          }}
        >
          Generate a unique ticket image with your GitHub profile.
        </motion.p>

        <motion.div
          className="github-user-data"
          initial="hidden"
          animate="visible"
          variants={animation.variants}
          transition={{
            duration: animation.duration,
            delay: 1.2,
            ease: animation.ease,
          }}
        >
          <FaGithub />
          <span>{githubUser.login}</span>
          <FaCheckCircle className="check-icon" />
        </motion.div>

        <motion.span
          initial="hidden"
          animate="visible"
          variants={animation.variants}
          transition={{
            duration: animation.duration,
            delay: 1.2,
            ease: animation.ease,
          }}
        >
          Only public info will be used.
        </motion.span>
      </TicketData>

      <UserTicket
        initial="hidden"
        animate="visible"
        variants={animation.variants}
        transition={{
          duration: animation.duration,
          delay: 1.6,
          ease: animation.ease,
        }}
      >
        <div className="ticket-container">
          <TicketVertical />
          <TicketHorizontal />

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
            <Button
              initial="hidden"
              animate="visible"
              variants={animation.variants}
              transition={{
                duration: animation.duration,
                delay: 2,
                ease: animation.ease,
              }}
            >
              <FaTwitter />
              Tweet it!
            </Button>

            <Button
              initial="hidden"
              animate="visible"
              variants={animation.variants}
              transition={{
                duration: animation.duration,
                delay: 2.2,
                ease: animation.ease,
              }}
            >
              <FaLinkedin />
              LinkedIn
            </Button>

            <Button
              initial="hidden"
              animate="visible"
              variants={animation.variants}
              transition={{
                duration: animation.duration,
                delay: 2.4,
                ease: animation.ease,
              }}
            >
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
