import { AgoraVideoPlayer } from 'agora-rtc-react';
import React from 'react'
import { useScreenVideoTrack } from '../../components/agora_config/Config'

const ShareScreen = tracks_data => {
  console.log({ tracks_data });
  return (
    <div>
      <AgoraVideoPlayer
        videoTrack={tracks_data[1]}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default ShareScreen