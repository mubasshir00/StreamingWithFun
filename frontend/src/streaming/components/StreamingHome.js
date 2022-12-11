import React from 'react'
import { useState } from 'react'

const StreamingHome = () => {
  const [shareScreen , setShareScreen] = useState(false);
  return (
    <div>

        {
          shareScreen ? 'a' : 'b'
        }
    </div>
  )
}

export default StreamingHome