import React, { Component } from 'react';

import { AFrameRenderer, Marker } from 'react-web-ar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AFrameRenderer
        arToolKit={{ sourceType: 'image', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pattern-hiro.png'}}
        stats
      >
        <Marker parameters={{ preset: 'hiro' }}>
          <a-box color='pink' material='opacity: 0.5;' position="0 0.003 0" scale='0.4 0.4 0.4'>
            <a-animation attribute="rotation" to="360 0 0" dur="5000" easing="linear" repeat="indefinite" />
          </a-box>
        </Marker>
      </AFrameRenderer>
      </div>
    );
  }
}

export default App;
