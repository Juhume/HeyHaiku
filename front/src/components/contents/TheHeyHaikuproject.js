import React, { Component } from 'react';
import SpotifyPlayer from 'react-spotify-player';

const size = {
  width: '100%',
  height: 600,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

export default class TheHeyHaikuproject extends Component {
  render() {
    return (
      <div>
        <div>
        <SpotifyPlayer
  uri="spotify:playlist:34FRecc8ZQW3E9vK7VM14n"
  size={size}
  view={view}
  theme={theme}
/>
      </div>
      </div>
    )
  }
}
