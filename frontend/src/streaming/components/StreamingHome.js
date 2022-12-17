import React from 'react'
import { useState } from 'react'
import { useScreenVideoTrack } from '../../components/agora_config/Config';
import ShareScreen from './ShareScreen';

const StreamingHome = () => {
  const { ready, tracks } = useScreenVideoTrack();
  return <div>{tracks ? <ShareScreen tracks_data={tracks} /> : 'nnn'}</div>;
}

export default StreamingHome