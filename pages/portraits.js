import Image from "next/image";
import Pic01 from "../public/images/1-_DSC5300.jpg"
import Pic02 from "../public/images/2-_DSC5384.jpg"
import Pic03 from "../public/images/10-_DSC5648.jpg"
import Pic04 from "../public/images/4-_DSC9052.jpg"
import Pic05 from "../public/images/5-_DSC8787.jpg"
import Pic06 from "../public/images/6-_DSC8483.jpg"
import Pic07 from "../public/images/7-_DSC8302.jpg"
import Pic08 from "../public/images/8-_DSC6987.jpg"
import Pic09 from "../public/images/9-_DSC6120.jpg"
import Pic10 from "../public/images/14-_DSC1971.jpg"
import Pic11 from "../public/images/15-DSC00829.jpg"
import Pic12 from "../public/images/16-DSC00394.jpg"
import Pic13 from "../public/images/18-DSC00010.jpg"
import Pic14 from "../public/images/20-_DSC5866.jpg"
import Pic15 from "../public/images/17-DSC00364.jpg"
import styles from "../styles/Gallery.module.css"

function Portraits() {
    return (
        <div className={styles.cards}>
            <Image src={Pic01} alt="Sample photo" />
            <Image src={Pic02} alt="Sample photo" />
            <Image src={Pic03} alt="Sample photo" />
            <Image src={Pic04} alt="Sample photo" />
            <Image src={Pic05} alt="Sample photo" />
            <Image src={Pic06} alt="Sample photo" />
            <Image src={Pic07} alt="Sample photo" />
            <Image src={Pic08} alt="Sample photo" />
            <Image src={Pic09} alt="Sample photo" />
            <Image src={Pic10} alt="Sample photo" />
            <Image src={Pic11} alt="Sample photo" />
            <Image src={Pic12} alt="Sample photo" />
            <Image src={Pic13} alt="Sample photo" />
            <Image src={Pic14} alt="Sample photo" />
            <Image src={Pic15} alt="Sample photo" />
        </div>
    )
}

export default Portraits;