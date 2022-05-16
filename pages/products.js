import Image from "next/image"
import Pic01 from "../public/images/1-_DSC6823.jpg"
import Pic02 from "../public/images/2-_DSC4535.jpg"
import Pic03 from "../public/images/3-_DSC4387.jpg"
import Pic04 from "../public/images/4-_DSC3045.jpg"
import Pic05 from "../public/images/5-_DSC9294.jpg"
import Pic06 from "../public/images/6-_DSC9297.jpg"
import Pic07 from "../public/images/7-_DSC9298.jpg"
import Pic08 from "../public/images/8-_DSC9403.jpg"
import Pic09 from "../public/images/10-DSC04848.jpg"
import styles from "../styles/Gallery.module.css"

function Products() {
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

        </div>
    )
}

export default Products;