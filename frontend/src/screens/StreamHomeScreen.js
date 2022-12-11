import React, { useState } from 'react'

const StreamHomeScreen = () => {
   const [shareScreen, setShareScreen] = useState(false);
  return (
    <div>
      <button onClick={()=>console.log('a')}>Start Screen Share</button>
      {shareScreen ? 'a' : 'b'}
    </div>
  );
}

export default StreamHomeScreen