import img from '../../frontendTestAssets/promo-2.jpg'
import styles from './promotions.module.scss'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import popupimg from '../../frontendTestAssets/promo-full-1.jpg';
export function Promotions() {
    return (
        <div className={styles.container}>
            <div className={styles.container2}>
                <img src={img} alt='img proms' className={styles.img} />
                <h4 className={styles.h1}>GET $1000 IN BONUSES AND 1000 FREE SPINS</h4>
                <p className={styles.p1}>Recive up to 100$ for free when making your first</p>
                <p className={styles.p1}>deposit and you get 100 free spins</p>
                <Popup trigger={<button className={styles.button}>MORE INFO</button>} position='bottom left' 
                contentStyle={{width:'54%'}} closeOnDocumentClick='true'>
                    <div id='popup-root' className={styles.popupdiv}>
                    
                        <img className={styles.popupimg} src={popupimg} alt='popup img'/>
                        <p className={styles.p2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices eros id lacus sagittis, vitae condimentum nibh gravida. Suspendisse feugiat justo nulla, varius tincidunt libero sagittis id. Cras maximus ullamcorper venenatis. Maecenas in semper mauris. Quisque dapibus ipsum eget neque ornare, vitae placerat nisi semper. Proin cursus libero eu pharetra vulputate. Proin eget tempor mauris. Nulla a est et risus tincidunt blandit.
                            Proin pharetra vitae tellus id imperdiet. Nulla venenatis nisl arcu, a congue orci egestas non. Ut sollicitudin velit mi. Morbi vitae lobortis tortor. Sed enim ipsum, tempor vel dignissim et, feugiat at leo. Cras libero diam, vulputate vitae imperdiet a, eleifend non metus. Duis quis posuere orci. Proin ac nulla at nisl imperdiet auctor. Sed at mollis justo, vitae ornare lectus. Vestibulum dolor nulla, volutpat ut convallis et, tincidunt nec ipsum. Maecenas ex dui, lacinia eget mauris eu, imperdiet suscipit leo. Nullam aliquet ut elit at ultrices. Suspendisse magna urna, tincidunt a erat quis, pharetra molestie urna. Duis pretium erat vitae eros gravida, sed vehicula diam fermentum.
                            Aliquam non tellus ex. Pellentesque porttitor nunc et ante auctor, vel condimentum mi pretium. Fusce porta, metus eu rutrum scelerisque, sapien leo accumsan eros, et pretium sem elit ut metus. Nunc nec quam id augue imperdiet maximus. Donec ac lorem in neque cursus semper. Donec vel dolor ac nisl vulputate volutpat nec eget urna. Etiam in pretium mi, ac lacinia purus. Donec ut iaculis erat.
                            Cras bibendum sapien massa, nec sollicitudin leo gravida a. Etiam sollicitudin, quam eget mollis suscipit, ante dui sollicitudin neque, nec bibendum purus tellus quis felis. Nullam dui ipsum, ultricies id finibus in, suscipit nec ligula. Vestibulum a blandit sem, vitae aliquet arcu. Suspendisse ligula est, tempus a consectetur vitae, imperdiet sit amet mi. Nullam vestibulum, metus nec ultrices cursus, diam urna sodales libero, non maximus arcu eros ac dui. Aliquam sit amet sem lacus. Nullam convallis rutrum efficitur. Phasellus eleifend tempus erat, quis suscipit erat ullamcorper quis. Aliquam erat volutpat. Sed non metus mauris. In hac habitasse platea dictumst. Fusce viverra felis ligula, sodales tristique dui viverra in. Pellentesque volutpat euismod augue ultrices congue.
                            Integer et venenatis quam. Cras sollicitudin orci quis velit vehicula fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin pharetra et purus quis venenatis. Curabitur maximus ut purus ut iaculis. Vestibulum pharetra cursus imperdiet. Sed convallis, diam a tincidunt sollicitudin, ligula nulla dapibus ante, vitae tincidunt diam lorem eu quam. Maecenas maximus neque eget blandit dictum. Nunc ultrices dolor quis scelerisque varius. Ut sed eros porttitor, tincidunt nisl vitae, blandit lorem.
                        </p>
                    </div>
                </Popup>
            </div>            
            <div className={styles.container2}>
                <img src={img} alt='img proms' className={styles.img} />
                <h4 className={styles.h1}>GET $1000 IN BONUSES AND 1000 FREE SPINS</h4>
                <p className={styles.p1}>Recive up to 100$ for free when making your first</p>
                <p className={styles.p1}>deposit and you get 100 free spins</p>
                <Popup trigger={<button className={styles.button}>MORE INFO</button>} position='bottom left' 
                contentStyle={{width:'54%'}} closeOnDocumentClick='true'>
                    <div id='popup-root' className={styles.popupdiv}>
                    
                        <img className={styles.popupimg} src={popupimg} alt='popup img'/>
                        <p className={styles.p2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices eros id lacus sagittis, vitae condimentum nibh gravida. Suspendisse feugiat justo nulla, varius tincidunt libero sagittis id. Cras maximus ullamcorper venenatis. Maecenas in semper mauris. Quisque dapibus ipsum eget neque ornare, vitae placerat nisi semper. Proin cursus libero eu pharetra vulputate. Proin eget tempor mauris. Nulla a est et risus tincidunt blandit.
                            Proin pharetra vitae tellus id imperdiet. Nulla venenatis nisl arcu, a congue orci egestas non. Ut sollicitudin velit mi. Morbi vitae lobortis tortor. Sed enim ipsum, tempor vel dignissim et, feugiat at leo. Cras libero diam, vulputate vitae imperdiet a, eleifend non metus. Duis quis posuere orci. Proin ac nulla at nisl imperdiet auctor. Sed at mollis justo, vitae ornare lectus. Vestibulum dolor nulla, volutpat ut convallis et, tincidunt nec ipsum. Maecenas ex dui, lacinia eget mauris eu, imperdiet suscipit leo. Nullam aliquet ut elit at ultrices. Suspendisse magna urna, tincidunt a erat quis, pharetra molestie urna. Duis pretium erat vitae eros gravida, sed vehicula diam fermentum.
                            Aliquam non tellus ex. Pellentesque porttitor nunc et ante auctor, vel condimentum mi pretium. Fusce porta, metus eu rutrum scelerisque, sapien leo accumsan eros, et pretium sem elit ut metus. Nunc nec quam id augue imperdiet maximus. Donec ac lorem in neque cursus semper. Donec vel dolor ac nisl vulputate volutpat nec eget urna. Etiam in pretium mi, ac lacinia purus. Donec ut iaculis erat.
                            Cras bibendum sapien massa, nec sollicitudin leo gravida a. Etiam sollicitudin, quam eget mollis suscipit, ante dui sollicitudin neque, nec bibendum purus tellus quis felis. Nullam dui ipsum, ultricies id finibus in, suscipit nec ligula. Vestibulum a blandit sem, vitae aliquet arcu. Suspendisse ligula est, tempus a consectetur vitae, imperdiet sit amet mi. Nullam vestibulum, metus nec ultrices cursus, diam urna sodales libero, non maximus arcu eros ac dui. Aliquam sit amet sem lacus. Nullam convallis rutrum efficitur. Phasellus eleifend tempus erat, quis suscipit erat ullamcorper quis. Aliquam erat volutpat. Sed non metus mauris. In hac habitasse platea dictumst. Fusce viverra felis ligula, sodales tristique dui viverra in. Pellentesque volutpat euismod augue ultrices congue.
                            Integer et venenatis quam. Cras sollicitudin orci quis velit vehicula fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin pharetra et purus quis venenatis. Curabitur maximus ut purus ut iaculis. Vestibulum pharetra cursus imperdiet. Sed convallis, diam a tincidunt sollicitudin, ligula nulla dapibus ante, vitae tincidunt diam lorem eu quam. Maecenas maximus neque eget blandit dictum. Nunc ultrices dolor quis scelerisque varius. Ut sed eros porttitor, tincidunt nisl vitae, blandit lorem.
                        </p>
                    </div>
                </Popup>
            </div>            
            <div className={styles.container2}>
                <img src={img} alt='img proms' className={styles.img} />
                <h4 className={styles.h1}>GET $1000 IN BONUSES AND 1000 FREE SPINS</h4>
                <p className={styles.p1}>Recive up to 100$ for free when making your first</p>
                <p className={styles.p1}>deposit and you get 100 free spins</p>
                 <Popup trigger={<button className={styles.button}>MORE INFO</button>} position='bottom left' 
                contentStyle={{width:'54%'}} closeOnDocumentClick='true'>
                    <div id='popup-root' className={styles.popupdiv}>
                    
                        <img className={styles.popupimg} src={popupimg} alt='popup img'/>
                        <p className={styles.p2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices eros id lacus sagittis, vitae condimentum nibh gravida. Suspendisse feugiat justo nulla, varius tincidunt libero sagittis id. Cras maximus ullamcorper venenatis. Maecenas in semper mauris. Quisque dapibus ipsum eget neque ornare, vitae placerat nisi semper. Proin cursus libero eu pharetra vulputate. Proin eget tempor mauris. Nulla a est et risus tincidunt blandit.
                            Proin pharetra vitae tellus id imperdiet. Nulla venenatis nisl arcu, a congue orci egestas non. Ut sollicitudin velit mi. Morbi vitae lobortis tortor. Sed enim ipsum, tempor vel dignissim et, feugiat at leo. Cras libero diam, vulputate vitae imperdiet a, eleifend non metus. Duis quis posuere orci. Proin ac nulla at nisl imperdiet auctor. Sed at mollis justo, vitae ornare lectus. Vestibulum dolor nulla, volutpat ut convallis et, tincidunt nec ipsum. Maecenas ex dui, lacinia eget mauris eu, imperdiet suscipit leo. Nullam aliquet ut elit at ultrices. Suspendisse magna urna, tincidunt a erat quis, pharetra molestie urna. Duis pretium erat vitae eros gravida, sed vehicula diam fermentum.
                            Aliquam non tellus ex. Pellentesque porttitor nunc et ante auctor, vel condimentum mi pretium. Fusce porta, metus eu rutrum scelerisque, sapien leo accumsan eros, et pretium sem elit ut metus. Nunc nec quam id augue imperdiet maximus. Donec ac lorem in neque cursus semper. Donec vel dolor ac nisl vulputate volutpat nec eget urna. Etiam in pretium mi, ac lacinia purus. Donec ut iaculis erat.
                            Cras bibendum sapien massa, nec sollicitudin leo gravida a. Etiam sollicitudin, quam eget mollis suscipit, ante dui sollicitudin neque, nec bibendum purus tellus quis felis. Nullam dui ipsum, ultricies id finibus in, suscipit nec ligula. Vestibulum a blandit sem, vitae aliquet arcu. Suspendisse ligula est, tempus a consectetur vitae, imperdiet sit amet mi. Nullam vestibulum, metus nec ultrices cursus, diam urna sodales libero, non maximus arcu eros ac dui. Aliquam sit amet sem lacus. Nullam convallis rutrum efficitur. Phasellus eleifend tempus erat, quis suscipit erat ullamcorper quis. Aliquam erat volutpat. Sed non metus mauris. In hac habitasse platea dictumst. Fusce viverra felis ligula, sodales tristique dui viverra in. Pellentesque volutpat euismod augue ultrices congue.
                            Integer et venenatis quam. Cras sollicitudin orci quis velit vehicula fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin pharetra et purus quis venenatis. Curabitur maximus ut purus ut iaculis. Vestibulum pharetra cursus imperdiet. Sed convallis, diam a tincidunt sollicitudin, ligula nulla dapibus ante, vitae tincidunt diam lorem eu quam. Maecenas maximus neque eget blandit dictum. Nunc ultrices dolor quis scelerisque varius. Ut sed eros porttitor, tincidunt nisl vitae, blandit lorem.
                        </p>
                    </div>
                </Popup>
            </div>            
            <div className={styles.container2}>
                <img src={img} alt='img proms' className={styles.img} />
                <h4 className={styles.h1}>GET $1000 IN BONUSES AND 1000 FREE SPINS</h4>
                <p className={styles.p1}>Recive up to 100$ for free when making your first</p>
                <p className={styles.p1}>deposit and you get 100 free spins</p>
                 <Popup trigger={<button className={styles.button}>MORE INFO</button>} position='bottom left' 
                contentStyle={{width:'54%'}} closeOnDocumentClick='true'>
                    <div id='popup-root' className={styles.popupdiv}>
                    
                        <img className={styles.popupimg} src={popupimg} alt='popup img'/>
                        <p className={styles.p2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices eros id lacus sagittis, vitae condimentum nibh gravida. Suspendisse feugiat justo nulla, varius tincidunt libero sagittis id. Cras maximus ullamcorper venenatis. Maecenas in semper mauris. Quisque dapibus ipsum eget neque ornare, vitae placerat nisi semper. Proin cursus libero eu pharetra vulputate. Proin eget tempor mauris. Nulla a est et risus tincidunt blandit.
                            Proin pharetra vitae tellus id imperdiet. Nulla venenatis nisl arcu, a congue orci egestas non. Ut sollicitudin velit mi. Morbi vitae lobortis tortor. Sed enim ipsum, tempor vel dignissim et, feugiat at leo. Cras libero diam, vulputate vitae imperdiet a, eleifend non metus. Duis quis posuere orci. Proin ac nulla at nisl imperdiet auctor. Sed at mollis justo, vitae ornare lectus. Vestibulum dolor nulla, volutpat ut convallis et, tincidunt nec ipsum. Maecenas ex dui, lacinia eget mauris eu, imperdiet suscipit leo. Nullam aliquet ut elit at ultrices. Suspendisse magna urna, tincidunt a erat quis, pharetra molestie urna. Duis pretium erat vitae eros gravida, sed vehicula diam fermentum.
                            Aliquam non tellus ex. Pellentesque porttitor nunc et ante auctor, vel condimentum mi pretium. Fusce porta, metus eu rutrum scelerisque, sapien leo accumsan eros, et pretium sem elit ut metus. Nunc nec quam id augue imperdiet maximus. Donec ac lorem in neque cursus semper. Donec vel dolor ac nisl vulputate volutpat nec eget urna. Etiam in pretium mi, ac lacinia purus. Donec ut iaculis erat.
                            Cras bibendum sapien massa, nec sollicitudin leo gravida a. Etiam sollicitudin, quam eget mollis suscipit, ante dui sollicitudin neque, nec bibendum purus tellus quis felis. Nullam dui ipsum, ultricies id finibus in, suscipit nec ligula. Vestibulum a blandit sem, vitae aliquet arcu. Suspendisse ligula est, tempus a consectetur vitae, imperdiet sit amet mi. Nullam vestibulum, metus nec ultrices cursus, diam urna sodales libero, non maximus arcu eros ac dui. Aliquam sit amet sem lacus. Nullam convallis rutrum efficitur. Phasellus eleifend tempus erat, quis suscipit erat ullamcorper quis. Aliquam erat volutpat. Sed non metus mauris. In hac habitasse platea dictumst. Fusce viverra felis ligula, sodales tristique dui viverra in. Pellentesque volutpat euismod augue ultrices congue.
                            Integer et venenatis quam. Cras sollicitudin orci quis velit vehicula fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin pharetra et purus quis venenatis. Curabitur maximus ut purus ut iaculis. Vestibulum pharetra cursus imperdiet. Sed convallis, diam a tincidunt sollicitudin, ligula nulla dapibus ante, vitae tincidunt diam lorem eu quam. Maecenas maximus neque eget blandit dictum. Nunc ultrices dolor quis scelerisque varius. Ut sed eros porttitor, tincidunt nisl vitae, blandit lorem.
                        </p>
                    </div>
                </Popup>
            </div>            
            <div className={styles.container2}>
                <img src={img} alt='img proms' className={styles.img} />
                <h4 className={styles.h1}>GET $1000 IN BONUSES AND 1000 FREE SPINS</h4>
                <p className={styles.p1}>Recive up to 100$ for free when making your first</p>
                <p className={styles.p1}>deposit and you get 100 free spins</p>
                <button className={styles.button}>MORE INFO</button>
            </div>            
            <div className={styles.container2}>
                <img src={img} alt='img proms' className={styles.img} />
                <h4 className={styles.h1}>GET $1000 IN BONUSES AND 1000 FREE SPINS</h4>
                <p className={styles.p1}>Recive up to 100$ for free when making your first</p>
                <p className={styles.p1}>deposit and you get 100 free spins</p>
                <button className={styles.button}>MORE INFO</button>
            </div>            
            <div className={styles.container2}>
                <img src={img} alt='img proms' className={styles.img} />
                <h4 className={styles.h1}>GET $1000 IN BONUSES AND 1000 FREE SPINS</h4>
                <p className={styles.p1}>Recive up to 100$ for free when making your first</p>
                <p className={styles.p1}>deposit and you get 100 free spins</p>
                 <Popup trigger={<button className={styles.button}>MORE INFO</button>} position='bottom left' 
                contentStyle={{width:'54%'}} closeOnDocumentClick='true'>
                    <div id='popup-root' className={styles.popupdiv}>
                    
                        <img className={styles.popupimg} src={popupimg} alt='popup img'/>
                        <p className={styles.p2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices eros id lacus sagittis, vitae condimentum nibh gravida. Suspendisse feugiat justo nulla, varius tincidunt libero sagittis id. Cras maximus ullamcorper venenatis. Maecenas in semper mauris. Quisque dapibus ipsum eget neque ornare, vitae placerat nisi semper. Proin cursus libero eu pharetra vulputate. Proin eget tempor mauris. Nulla a est et risus tincidunt blandit.
                            Proin pharetra vitae tellus id imperdiet. Nulla venenatis nisl arcu, a congue orci egestas non. Ut sollicitudin velit mi. Morbi vitae lobortis tortor. Sed enim ipsum, tempor vel dignissim et, feugiat at leo. Cras libero diam, vulputate vitae imperdiet a, eleifend non metus. Duis quis posuere orci. Proin ac nulla at nisl imperdiet auctor. Sed at mollis justo, vitae ornare lectus. Vestibulum dolor nulla, volutpat ut convallis et, tincidunt nec ipsum. Maecenas ex dui, lacinia eget mauris eu, imperdiet suscipit leo. Nullam aliquet ut elit at ultrices. Suspendisse magna urna, tincidunt a erat quis, pharetra molestie urna. Duis pretium erat vitae eros gravida, sed vehicula diam fermentum.
                            Aliquam non tellus ex. Pellentesque porttitor nunc et ante auctor, vel condimentum mi pretium. Fusce porta, metus eu rutrum scelerisque, sapien leo accumsan eros, et pretium sem elit ut metus. Nunc nec quam id augue imperdiet maximus. Donec ac lorem in neque cursus semper. Donec vel dolor ac nisl vulputate volutpat nec eget urna. Etiam in pretium mi, ac lacinia purus. Donec ut iaculis erat.
                            Cras bibendum sapien massa, nec sollicitudin leo gravida a. Etiam sollicitudin, quam eget mollis suscipit, ante dui sollicitudin neque, nec bibendum purus tellus quis felis. Nullam dui ipsum, ultricies id finibus in, suscipit nec ligula. Vestibulum a blandit sem, vitae aliquet arcu. Suspendisse ligula est, tempus a consectetur vitae, imperdiet sit amet mi. Nullam vestibulum, metus nec ultrices cursus, diam urna sodales libero, non maximus arcu eros ac dui. Aliquam sit amet sem lacus. Nullam convallis rutrum efficitur. Phasellus eleifend tempus erat, quis suscipit erat ullamcorper quis. Aliquam erat volutpat. Sed non metus mauris. In hac habitasse platea dictumst. Fusce viverra felis ligula, sodales tristique dui viverra in. Pellentesque volutpat euismod augue ultrices congue.
                            Integer et venenatis quam. Cras sollicitudin orci quis velit vehicula fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin pharetra et purus quis venenatis. Curabitur maximus ut purus ut iaculis. Vestibulum pharetra cursus imperdiet. Sed convallis, diam a tincidunt sollicitudin, ligula nulla dapibus ante, vitae tincidunt diam lorem eu quam. Maecenas maximus neque eget blandit dictum. Nunc ultrices dolor quis scelerisque varius. Ut sed eros porttitor, tincidunt nisl vitae, blandit lorem.
                        </p>
                    </div>
                </Popup>
            </div>            
            <div className={styles.container2}>
                <img src={img} alt='img proms' className={styles.img} />
                <h4 className={styles.h1}>GET $1000 IN BONUSES AND 1000 FREE SPINS</h4>
                <p className={styles.p1}>Recive up to 100$ for free when making your first</p>
                <p className={styles.p1}>deposit and you get 100 free spins</p>
                 <Popup trigger={<button className={styles.button}>MORE INFO</button>} position='bottom left' 
                contentStyle={{width:'54%'}} closeOnDocumentClick='true'>
                    <div id='popup-root' className={styles.popupdiv}>
                    
                        <img className={styles.popupimg} src={popupimg} alt='popup img'/>
                        <p className={styles.p2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices eros id lacus sagittis, vitae condimentum nibh gravida. Suspendisse feugiat justo nulla, varius tincidunt libero sagittis id. Cras maximus ullamcorper venenatis. Maecenas in semper mauris. Quisque dapibus ipsum eget neque ornare, vitae placerat nisi semper. Proin cursus libero eu pharetra vulputate. Proin eget tempor mauris. Nulla a est et risus tincidunt blandit.
                            Proin pharetra vitae tellus id imperdiet. Nulla venenatis nisl arcu, a congue orci egestas non. Ut sollicitudin velit mi. Morbi vitae lobortis tortor. Sed enim ipsum, tempor vel dignissim et, feugiat at leo. Cras libero diam, vulputate vitae imperdiet a, eleifend non metus. Duis quis posuere orci. Proin ac nulla at nisl imperdiet auctor. Sed at mollis justo, vitae ornare lectus. Vestibulum dolor nulla, volutpat ut convallis et, tincidunt nec ipsum. Maecenas ex dui, lacinia eget mauris eu, imperdiet suscipit leo. Nullam aliquet ut elit at ultrices. Suspendisse magna urna, tincidunt a erat quis, pharetra molestie urna. Duis pretium erat vitae eros gravida, sed vehicula diam fermentum.
                            Aliquam non tellus ex. Pellentesque porttitor nunc et ante auctor, vel condimentum mi pretium. Fusce porta, metus eu rutrum scelerisque, sapien leo accumsan eros, et pretium sem elit ut metus. Nunc nec quam id augue imperdiet maximus. Donec ac lorem in neque cursus semper. Donec vel dolor ac nisl vulputate volutpat nec eget urna. Etiam in pretium mi, ac lacinia purus. Donec ut iaculis erat.
                            Cras bibendum sapien massa, nec sollicitudin leo gravida a. Etiam sollicitudin, quam eget mollis suscipit, ante dui sollicitudin neque, nec bibendum purus tellus quis felis. Nullam dui ipsum, ultricies id finibus in, suscipit nec ligula. Vestibulum a blandit sem, vitae aliquet arcu. Suspendisse ligula est, tempus a consectetur vitae, imperdiet sit amet mi. Nullam vestibulum, metus nec ultrices cursus, diam urna sodales libero, non maximus arcu eros ac dui. Aliquam sit amet sem lacus. Nullam convallis rutrum efficitur. Phasellus eleifend tempus erat, quis suscipit erat ullamcorper quis. Aliquam erat volutpat. Sed non metus mauris. In hac habitasse platea dictumst. Fusce viverra felis ligula, sodales tristique dui viverra in. Pellentesque volutpat euismod augue ultrices congue.
                            Integer et venenatis quam. Cras sollicitudin orci quis velit vehicula fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin pharetra et purus quis venenatis. Curabitur maximus ut purus ut iaculis. Vestibulum pharetra cursus imperdiet. Sed convallis, diam a tincidunt sollicitudin, ligula nulla dapibus ante, vitae tincidunt diam lorem eu quam. Maecenas maximus neque eget blandit dictum. Nunc ultrices dolor quis scelerisque varius. Ut sed eros porttitor, tincidunt nisl vitae, blandit lorem.
                        </p>
                    </div>
                </Popup>
            </div>
        </div>
    )
}