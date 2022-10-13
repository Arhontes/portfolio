import React from 'react';
import styles from './Main.module.scss';
import MouseAttractionPartical from "../common/components/MouseAttraction-Partical";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-tilt'


function Main() {
    return (
        <div id={"main"} className={styles.mainBlock}>
            <MouseAttractionPartical />

                <div className={styles.container}>
                    <Fade left>
                        <div className={styles.greeting}>
                            <span>Hi There</span>
                            <span>I am Alex <span>Betke</span></span>
                            <ReactTypingEffect text={'Frontend Developer.'}/>
                        </div>
                    </Fade>
                  <Fade right>
                      <Tilt className="Tilt" options={{ max : 25 }} >
                          <div className={styles.photo}>
                              <div className={styles.image}>

                              </div>
                          </div>
                      </Tilt>
                  </Fade>
                </div>

        </div>
    );
}

export default Main;