import classes from "../Styles/Slider.module.css";
import Navbar from "./Navbar";
import growVid from "../media/Videos/1_Grow_up_Stage_Modul_video.mp4";
import growImg from "../media/Thumbnails/growImg.jpg";
import easyRider from "../media/Thumbnails/EasyRider.jpg";
import eqStage from "../media/Thumbnails/eq_stage_video.jpg";
import bmwStage from "../media/Thumbnails/bmw_stage_3.jpg";
import F1stage from "../media/Thumbnails/F1_stage.jpg";
import IAA_Makingof_8Sec_L from "../media/Thumbnails/IAA_Making_Of.jpg";
import katjes_stage from "../media/Thumbnails/katjes_stage.jpg";
import Mercedes from "../media/Thumbnails/Mercedes_Leon_stage.jpg";
import risk_1 from "../media/Thumbnails/risk_1.jpg";
import stage_g_class_dna from "../media/Thumbnails/stage_g_class_dna.jpg";
import stage_xmas from "../media/Thumbnails/stage_xmas.jpg";
import TimeToLookUpAgain_8Sec_L from "../media/Thumbnails/TimeToLookUpAgain.jpg";
import bmwVidStage from "../media/Videos/bmw_stage_3.mp4";
import easyRiderVid from "../media/Videos/EasyRider_8Sec_L.mp4";
import eqStageVid from "../media/Videos/eq_stage_video.mp4";
import F1_stagVid from "../media/Videos/F1_stage.mp4";
import IAA_vid from "../media/Videos/IAA_Makingof_8Sec_L.mp4";
import katjesVid from "../media/Videos/katjes_stage.mp4";
import mercedesVid from "../media/Videos/Mercedes_Leon_stage.mp4";
import riskVid from "../media/Videos/risk_1.mp4";
import stage_gVid from "../media/Videos/stage_g_class_dna.mp4";
import stage_xmasVid from "../media/Videos/stage_xmas.mp4";
import timeToLookVid from "../media/Videos/TimeToLookUpAgain_8Sec_L.mp4";
import React from "react";

const Slider = () => {
  const clip = document.querySelectorAll('.videoSlider__container__card__vid');
  for (let i = 0; i <  clip.length; i++){
    clip[i].addEventListener('mouseenter', function(e){
      clip[i].play()
    })
    clip[i].addEventListener('mouseout', function(e){
      clip[i].pause()
    })
  }
  
  return (
    <div>
      <Navbar />
      <main className={classes.videoSlider} id="home" smooth="true" >
        <section className={classes.videoSlider__container}>
          <div className={classes.videoSlider__container__card}>
            <video
              className={classes.videoSlider__container__card__vid}
              muted
              playsInline
              src={growVid} type="video/mp4" 
              poster={growImg}
              loop
            ></video>
            <div className={classes.videoSlider__container__card__info}>
              <h1 className={classes.videoSlider__container__card__info__title}>
                Grown Up Stage
              </h1>
              <h3>Stories of a New Generation</h3>
            </div>
          </div>
          <div className={classes.videoSlider__container__card}>
            <video
              className={classes.videoSlider__container__card__vid}
              muted
              playsInline
              src={easyRiderVid} type="video/mp4" 
              poster={easyRider}
              loop
            ></video>
            <div className={classes.videoSlider__container__card__info}>
              <h1 className={classes.videoSlider__container__card__info__title}>
                Easy Rider
              </h1>
              <h3>Mercedes AMG GT C Roadster</h3>
            </div>
          </div>
          <div className={classes.videoSlider__container__card}>
            <video
              className={classes.videoSlider__container__card__vid}
              muted
              playsInline
              src={eqStageVid} type="video/mp4" 
              poster={eqStage}
              loop
            ></video>
            <div className={classes.videoSlider__container__card__info}>
              <h1 className={classes.videoSlider__container__card__info__title}>
                Flip the switch
              </h1>
              <h3>Electric Intelligence by Mercedes</h3>
            </div>
          </div>
          <div className={classes.videoSlider__container__card}>
            <video
              className={classes.videoSlider__container__card__vid}
              muted
              playsInline
              src={F1_stagVid} type="video/mp4" 
              poster={F1stage}
              loop
            ></video>
            <div className={classes.videoSlider__container__card__info}>
              <h1 className={classes.videoSlider__container__card__info__title}>
                F1 Stage
              </h1>
              <h3>F1 Mercedes</h3>
            </div>
          </div>
          <div className={classes.videoSlider__container__card}>
            <video
              className={classes.videoSlider__container__card__vid}
              muted
              playsInline
              src={bmwVidStage}
              type="video/mp4" 
              poster={bmwStage}
              loop
            ></video>
            <div className={classes.videoSlider__container__card__info}>
              <h1 className={classes.videoSlider__container__card__info__title}>
                BMW Stage
              </h1>
              <h3>BMW </h3>
            </div>
          </div>
          <div className={classes.videoSlider__container__card}>
            <video
              className={classes.videoSlider__container__card__vid}
              muted
              playsInline
              src={IAA_vid}
              type="video/mp4" 
              poster={IAA_Makingof_8Sec_L}
              loop
            ></video>
            <div className={classes.videoSlider__container__card__info}>
              <h1 className={classes.videoSlider__container__card__info__title}>
                Luxury in Motion
              </h1>
              <h3>The FO15 Car concept</h3>
            </div>
          </div>
          <div className={classes.videoSlider__container__card}>
            <video
              className={classes.videoSlider__container__card__vid}
              muted
              playsInline
              src={katjesVid}
              type="video/mp4"
              poster={katjes_stage}
              loop
            ></video>
            <div className={classes.videoSlider__container__card__info}>
              <h1 className={classes.videoSlider__container__card__info__title}>
                Jes! All vegie
              </h1>
              <h3>Our first ever sweets campaign</h3>
            </div>
          </div>
          <div className={classes.videoSlider__container__card}>
            <video
              className={classes.videoSlider__container__card__vid}
              muted
              playsInline
              src={mercedesVid}
              type="video/mp4"
              poster={Mercedes}
              loop
            ></video>
            <div className={classes.videoSlider__container__card__info}>
              <h1 className={classes.videoSlider__container__card__info__title}>
                Mercedes Leon Stage
              </h1>
              <h3>Leon</h3>
            </div>
          </div>
          <div className={classes.videoSlider__container__card}>
            <video
              className={classes.videoSlider__container__card__vid}
              muted
              playsInline
              src={riskVid}
              type="video/mp4"
              poster={risk_1}
              loop
            ></video>
            <div className={classes.videoSlider__container__card__info}>
              <h1 className={classes.videoSlider__container__card__info__title}>
                Play By your Rules
              </h1>
              <h3>Aglet</h3>
            </div>
          </div>
          <div className={classes.videoSlider__container__card}>
            <video
              className={classes.videoSlider__container__card__vid}
              muted
              playsInline
              src={stage_gVid}
              type="video/mp4"
              poster={stage_g_class_dna}
              loop
            ></video>
            <div className={classes.videoSlider__container__card__info}>
              <h1 className={classes.videoSlider__container__card__info__title}>
                Stronger than time
              </h1>
              <h3>The new G-Class</h3>
            </div>
          </div>
          <div className={classes.videoSlider__container__card}>
            <video
              className={classes.videoSlider__container__card__vid}
              muted
              playsInline
              src={stage_xmasVid}
              type="video/mp4"
              poster={stage_xmas}
              loop
            ></video>
            <div className={classes.videoSlider__container__card__info}>
              <h1 className={classes.videoSlider__container__card__info__title}>
                X-Mas
              </h1>
              <h3> X-Mas Stage</h3>
            </div>
          </div>
          <div className={classes.videoSlider__container__card}>
            <video
              className={classes.videoSlider__container__card__vid}
              muted
              playsInline
              src={timeToLookVid}
              type="video/mp4"
              poster={TimeToLookUpAgain_8Sec_L}
              loop
            ></video>
            <div className={classes.videoSlider__container__card__info}>
              <h1 className={classes.videoSlider__container__card__info__title}>
                Unleash Your Senses
              </h1>
              <h3>The New C-Class cabriolet</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Slider;
