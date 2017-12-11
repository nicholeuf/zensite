import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PortfolioCard from './molecules/PortfolioCard';
import PortfolioEntry from './molecules/PortfolioEntry';
import YouTube from 'react-youtube';

const defaultOpts = {
  width: '100%'
};

const stack = [
  {
    title: 'Company Introduction',
    videoId: 'nibWocj9A5Q',
    opts: {
      ...defaultOpts,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }
  },
  {
    title: 'Product Overview',
    videoId: 'ueblC5crJu0',
    opts: defaultOpts
  },
  {
    title: 'Website Features',
    videoId: 'eK7IqRPQbYw',
    opts: defaultOpts
  }
]

const Portfolio = ({ repo }) => {
  return (
    <section className="section">
      <Helmet title="Portfolio" />
      <h1 className="title">Portfolio</h1>

      <PortfolioEntry title="Door to Door Organics">
        <p>
          During my three and a half years with the company, I worked my way up from a Sr. Java Developer to the Lead
          of the Front-End team.  In 2016 we merged with Relay Foods, and I transitioned to a Full-Stack Developer on a remote-first team,
          where I continued to work in a lead role on our Front-End stack.
        </p>
        <p>
          I started at the company as a Sr. Software Engineer with a background in Enterprise Java, but fell in love with JavaScript and React at this job.  In addition,
          I worked on several of our Node Micro-Services, Internal Tools, and contributed to the transition of our user base to the new platform.
        </p>
        <p>
          I introduced sagas for achieving complex user interactions and reselect for performant access to our
          redux architecture.  We used JWT for authentication and our stack was hosted on AWS EB and CircleCI was used for build automation and deployment.
        </p>
        <p>
          Our team used slack and screenhero for paired programming and collaboration.  We were a fast-paced team
          with a focus on iterative development.
        </p>
        {stack.map(({ title, ...others }) => {
          return (
            <PortfolioCard key={title} title={title}>
              <YouTube {...others} />
            </PortfolioCard>
          );
        })}
      </PortfolioEntry>

      <PortfolioEntry title="Professional Website &amp; Portfolio">
        <p>
          The website you see here is hosted on Amazon Web Services (AWS) ElasticBeanstalk (EB) and deployed from
          CircleCI 2.0.  It is a responsive site built with Bulma, React, React Router, Node, and Docker.  Redux will be
          added shortly in addition to some other ideas I'm cooking up for <a href={`${repo}/issues/4`}>V2</a>.
        </p>
        <p>
          Take a look at the <a href={repo}>source</a> if you are interested.
        </p>
      </PortfolioEntry>

    </section>
  );
}

Portfolio.propTypes = {
  repo: PropTypes.string.isRequired
};

Portfolio.defaultProps = {
  repo: `${process.env.REACT_APP_GITHUB_URL}/zensite`
};

export default Portfolio;
