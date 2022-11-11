import React from "react";
import useVH from 'react-viewport-height';
import "./App.css";
import Video from "./components/Video";
import axios from "./components/axios";

function App() {
  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/v2/posts");
      setVideos(res.data);
      return res;
    }
    fetchData();
  }, []);

  const vh = useVH();

  return (
    <div className="app">
      <div className="app__videos" style={{height: 100 * vh + 1 + "px"}}>
        {videos.map(
          ({ url, channel, description, song, likes, shares, messages }) => (
            <Video
              key={url}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              messages={messages}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
