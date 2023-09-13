import React, {useState, useEffect} from "react";
import axios from "axios";


const App = () =>{

    const [search, setSearch]= useState("React Tutorial");
    const [videos, setVideos]= useState([]);
    const [selectedVideo, setSelectedVideo]= useState("")

useEffect(()=>{
    findVideos()
},[])


    function findVideos(e){
        if(e)
        {
        e.preventDefault();
        }
        axios.get("https://www.googleapis.com/youtube/v3/search", {
            params:{
                q: search,
                part: "snippet",
                maxResults: 5,
                type: "video",
                key: "AIzaSyAUBLwIKuEGkmESheAkPvz5uslx8095eQA"
            }
        })
        .then(res=>{
            setVideos(res.data.items)
            setSelectedVideo(res.data.items[0])
        
        }
        
        )
        .catch(err=> console.log(err))


    }



    return (
        <div>
            <div className="search">
                    <form>
                        <input type="text" placeholder="Search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        />
                        <button type="submit"
                        onClick={findVideos}
                        >Search
                        
                        </button>
                    </form>
            </div>

            <div className="video">

                <div className="video-play">

                    { selectedVideo &&
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}></iframe>
                    }
                </div>

                    <div className="videos-list">
                        {
                            videos.map((video)=>

                            <div onClick={()=>setSelectedVideo(video)}>
                            
                            <img src={video.snippet.thumbnails.medium.url} atlt={video.snippet.description}></img>

                            </div>
                            )

                        }


                    </div>
            </div>
        </div>
    )
}

export default App;