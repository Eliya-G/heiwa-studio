// import { useState, useEffect } from "react";
import "./aboutPage.css"
import { useState } from "react";
import { Map } from "../sharedComponents/map"

export function AboutPage(){
  const [mainSlide, setMainSlide] = useState(0);
  const slideshowDir = "/aboutPage/studioImages"
  const slideshowArray = [`${slideshowDir}/1.png`,`${slideshowDir}/2.png`,`${slideshowDir}/3.png`,`${slideshowDir}/4.png`]

  const teamMembersDir = "/aboutPage/meetTheTeamImages"
  const teamMembersArray = [`${teamMembersDir}/1.png`,`${teamMembersDir}/2.png`,`${teamMembersDir}/3.png`]

    return<>
    <h1 id="top-spacer-supporter" className="abt-title">Meet Our Team</h1>
      <div className="content-body">
        <div className="team-card-container">
        <div className="team-member-card">
          <img className="team-icons" src={teamMembersArray[0]} alt="" />
          <h3 className="title-app">Instructor 1</h3>
          <p className="team-member-para">I'm a meditation instructor with over a decade of experience guiding people back to themselves through breath, awareness, and presence. My approach is gentle yet grounded, weaving traditional practices with modern insights. I believe that meditation should feel accessible, personal, and deeply human.</p>
        </div>
        <div className="team-member-card">
          <img className="team-icons" src={teamMembersArray[1]} alt="" />
          <h3 className="title-app">Instructor 2</h3>
          <p className="team-member-para">As a long-time student of both Zen and Vipassana traditions, I offer a contemplative space where silence speaks volumes. My teaching is rooted in stillness, inquiry, and the belief that every moment holds the potential for awakening. Whether you're just starting or deepening your practice, I'm here to walk beside you.</p>
        </div>
        <div className="team-member-card">
          <img className="team-icons" src={teamMembersArray[2]} alt="" />
          <h3 className="title-app">Instructor 3</h3>
          <p className="team-member-para">My journey into meditation began as a way to manage stress, but it quickly became a path to joy and self-discovery. I now teach heart-centered practices that help people reconnect with their inner calm and resilience. With warmth and curiosity, I guide sessions that invite ease and authenticity.</p>
        </div>
      </div>
    </div>

    <div className="content-body">
      <div className="slideshow-wrapper">
      <div className="sideshow-container">
      <div className="top-studio-slideshow">
        <h1 className="title-app">Our Studio</h1>
        <img id="main-display-image" src={slideshowArray[mainSlide]} alt="" />
      </div>
      <div className="slideshow-frame">
      <div className="bottom-studio-slideshow">
        <div className="bottom-studio-item">
        <img src={slideshowArray[0]} alt="" onClick={()=>setMainSlide(0)}/>
        </div>
        <div className="bottom-studio-item">
        <img src={slideshowArray[1]} alt="" onClick={()=>setMainSlide(1)}/>
        </div>
        <div className="bottom-studio-item">
        <img src={slideshowArray[2]} alt="" onClick={()=>setMainSlide(2)}/>
        </div>
        <div className="bottom-studio-item">
        <img src={slideshowArray[3]} alt="" onClick={()=>setMainSlide(3)}/>
        </div>
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
}
