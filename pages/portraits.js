import Image from "next/image";
import styles from "../styles/Gallery.module.css"
import { getStorage, ref, getDownloadURL, listAll, } from "firebase/storage";

function Portraits({ images }) {

    return (
        <div className={styles.cards}>
            {images.map((image, index) =>
                <Image key={index} src={image} layout="fixed" height={300} width={200} alt="Sample photo" />)
            }
        </div>
    )
}


export async function getServerSideProps() {

    const storage = getStorage();
    const listImages = ref(storage, '/portraits/')

    const request = await listAll(listImages);
    const result = request.items.map(item => getDownloadURL(item));
    const images = await Promise.all(result);

    return {
        props: {
            images
        }
    }
}

export default Portraits;