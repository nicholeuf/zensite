import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CloudinaryContext } from 'cloudinary-react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const ogImage = `http://res.cloudinary.com/${cloudName}/image/upload/w_200,h_200,c_thumb,g_face/profile.png`;

class App extends Component {
  render() {
    return (
      <CloudinaryContext cloudName={cloudName}>
        <Helmet
          defaultTitle="Nichole Frey"
          titleTemplate="Nichole Frey | %s"
        >
          <base target="_blank" href={window.location.origin} />
          <meta property="og:image" content={ogImage} />
        </Helmet>
        <BrowserRouter>
          <article className="section">
            <Header />
            <main role="main" className="container is-fluid">
              <Route exact path="/portfolio" component={Portfolio} />
              <Route path="/" component={Home} />
            </main>
            <Footer />
          </article>
        </BrowserRouter>
      </CloudinaryContext>
    );
  }
}

export default App;
