import React from 'react';
import {demoCarousel} from '../Carousel'
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../frontendTestAssets/back-1.png';
import img2 from '../../frontendTestAssets/back-2.jpg';
import img3 from '../../frontendTestAssets/back-3.png';
import img4 from '../../frontendTestAssets/image-1.png';
import img5 from '../../frontendTestAssets/image-2.png';
import img6 from '../../frontendTestAssets/image-3.png';
import styles from './home.module.scss';
import {Promotions} from '../proms/Promotions';
import {HMenu} from '../hamburgerMenu/HamMenu';

export function Home() {
    return (
        <div>
            <Carousel showArrows='true'>
                <div className={styles.container}>
                    <img src={img1} alt='back1' className={styles.img}/>
                    <img src={img4} alt='img1' className={styles.img2}/> 
                    <div className={styles.container2}> 
                        <h1 className={styles.h1}>
                            Grab 100% up to $200
                        </h1>
                        <h1 className={styles.h1}>
                            And 200 free spins
                        </h1>
                        <p className={styles.p}>
                            Get ready to party with us! <strong>Unlock hundreds in bonus cash</strong> and
                        </p>
                        <p className={styles.p}>
                            collect piles of <strong>free spins for 10 days</strong> on your first deposit of $20 or
                        </p>
                        <p className={styles.p}>
                            more
                        </p>
                        <button className={styles.button}><strong>SIGN UP</strong></button>
                    </div>
                </div>
                <div className={styles.container}>
                    <img src={img2} alt='back2' className={styles.img}/>
                    <img src={img5} alt='img5' className={styles.img2}/> 
                    <div className={styles.container2}> 
                        <h1 className={styles.h1}>
                        Win and enjoy!
                        </h1>
                        <p className={styles.p}>
                        Get the most of your wins and enjoy your holiday!
                        </p>
                        <button className={styles.button}><strong>SIGN UP</strong></button>
                    </div>  
                </div>
                <div className={styles.container}>
                    <img src={img3} alt='back3'/>
                    <img src={img6} alt='img6' className={styles.img2}/> 
                    <div className={styles.container2}> 
                        <h1 className={styles.h1}>
                        Ready for the thrill?
                        </h1>
                        <p className={styles.p}>
                        Isn't it exciting to win whilst you're enjoying from home.  Then come visit 
                        </p>
                        <p className={styles.p}> 
                        our portal and get your chance to win unlimited prizes that can change     
                        </p>
                        <p className={styles.p}> 
                        your life from today to tomorrow!  
                        </p>
                        <p className={styles.p}>
                        Are you ready?
                        </p>
                        <button className={styles.button}><strong>SIGN UP</strong></button>
                    </div>  
                </div>
            </Carousel>
            <HMenu/>
            <Promotions />        
        </div>
    )
}