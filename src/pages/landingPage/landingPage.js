import "./landingPage.css";
import { useState, useEffect } from "react";
import { Map } from "../sharedComponents/map"

export function LandingPage() {
  const [index, setIndex] = useState(0);
  const [sliderPauseBool, setSliderPause] = useState(false)
  
  function userStars(){
    return <>
    <img className="testimony-stars" src="/star.png" alt="" />
    <img className="testimony-stars" src="/star.png" alt="" />
    <img className="testimony-stars" src="/star.png" alt="" />
    <img className="testimony-stars" src="/star.png" alt="" />
    <img className="testimony-stars" src="/star.png" alt="" />
    </>
  }

  function radioHandler(i){
    setSliderPause(true);
    setIndex(i)
    setInterval(()=>{
      setSliderPause(false);
    }, 8000)
  }


  useEffect(() => {

    if(sliderPauseBool === false){
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % 3);
      }, 3000);
  
      return () => clearInterval(interval); 
    } 
  }, [sliderPauseBool]);


  return (
    <>
      <div className="image-container1">
        <img
          src="/landingPage/meditation_garden.png"
          alt="Background"
          className="background"
        />
        <img src="/landingPage/splashText.png" alt="Overlay" className="overlay" />
      </div>

      <div className="content-body">
        <h1 className="title-app">Center Yourself Today</h1>
        <p>
          In a world of distractions and worries we all need a place to quiet
          the mind. Here in Heiwa Studio we welcome you to come as you are. To
          find your happy place and let go of stress. We focuse on breath work
          and deep meditation. With an encouraging community of fellow students
          ranging from all backgrounds. Join up in our shared journey to better
          ourselves and the world around us.
        </p>
    </div>
      <div className="testimony-cont">
        <img src="/landingPage/sand_circles.jpg" alt="background" className="background"/>
        <div className="overlay">
        <h2 className="title-app">Testimonys</h2>
        <div className="slider-wrapper">
          <div className="slider"  style={{ transform: `translateX(-${index * 100}%)` }}>
          <div className="testimony-card">
              <img className="testimony-icon" src="/landingPage/profile-1.png" alt="" />
              <h3 className="testimony-name">Review 1</h3>
              <p className="testimony-para">I had such a great experience.</p>
              {userStars()}
              </div>
          <div className="testimony-card">
              <img className="testimony-icon" src="/landingPage/profile-2.png" alt="" />
              <h3 className="testimony-name">Review 2</h3>
              <p className="testimony-para">I had such a good time. I'm telling my whole family about Heiwa.</p>
              {userStars()}
              </div>
          <div className="testimony-card">
              <img className="testimony-icon" src="/landingPage/profile-3.png" alt="" />
              <h3 className="testimony-name">Review 3</h3>
              <p className="testimony-para">Amazing. My only regret is to not have found this place earlier.</p>
              {userStars()}
              </div>
          </div>
              <div className="radio-input">
              <input type="radio" name="value-radio" value="value-1" checked={index === 0} onChange={()=>radioHandler(0)}></input>
              <div className="circle">
              </div> 
              <input type="radio" name="value-radio" value="value-2" checked={index === 1} onChange={()=>radioHandler(1)}></input>
              <div className="circle">
              </div> 
              <input type="radio" name="value-radio" value="value-3" checked={index === 2} onChange={()=>radioHandler(2)}></input>
              <div className="circle">
              </div> 
              </div>
        </div>

        </div>
      </div>
            <div className="content-body">
              <h1 className="title-app">Where to find us</h1>
              <div className="map-container">
              <Map />
              </div>
            </div>
    </>
  );
}

