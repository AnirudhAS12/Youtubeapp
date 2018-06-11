import React, {Component} from 'react';
import { render } from 'react-dom';
// import Hello from './Hello';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
// const styles = {
//   fontFamily: 'sans-serif',
//   textAlign: 'center',
// };
const API_KEY='AIzaSyBU1eMEYFTL85krJbEHfHtNTisHJba8j88';
// YTSearch({key:API_KEY, term:'thunders'}, function(data){
//   console.log(data);
// })

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state={ videos:[],
                 selectedVideo : null                
                };
                
    // YTSearch({ key: API_KEY, term: 'ipl' }, (videos) => {
    //   console.log(videos);
    //   this.setState({videos : videos, 
    //   selectedVideo:videos[0]})
    // })
  }

  videoSearch(term){
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })

  }


  render(){
    return(
  <div>
    <SearchBar onSearchChange={term => this.videoSearch(term)}/>
    <VideoDetails video={this.state.selectedVideos} />
    <VideoList 
    onVideoSelect={ selectedVideo =>this.setState({selectedVideo})} 
    videos={this.state.videos} />
  </div>
    )}
}

render(<App />, document.getElementById('root'));
