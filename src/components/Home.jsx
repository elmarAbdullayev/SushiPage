import '../style/mystyle.css'
import video from '../audios/SushiVideo.mp4'

function Home(){

    return(
     
 <> 

    
        <div className='myVideosParent'>
        
        <video src={video} className='myVideo' autoPlay loop muted/>
        
        </div>

 </>
     



    
    )
}

export default Home;