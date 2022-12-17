import React, { useState } from 'react'
import StreamingHome from '../streaming/components/StreamingHome';

const StreamHomeScreen = () => {
   const [shareScreen, setShareScreen] = useState(false);
  return (
    <div>
      <button onClick={() => setShareScreen(true)}>Start Screen Share</button>
      <button onClick={() => setShareScreen(false)}>Stop</button>
      {shareScreen ? <StreamingHome/> : 'b'}
    </div>
  );
}

export default StreamHomeScreen