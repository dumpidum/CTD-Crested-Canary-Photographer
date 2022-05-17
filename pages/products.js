import Image from "next/image";
import styles from "../styles/Gallery.module.css"
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import { useEffect, useState } from "react";

function Products() {

    const [allImages, setImages] = useState([]);

    useEffect(() => {
        const storage = getStorage();
        const listImages = ref(storage, '/products/')

        listAll(listImages).then(res => {
            res.items.forEach(itemRef => {
                getDownloadURL(itemRef).then(url => setImages(state => [...state, url]))
            })
        })
    }, [])

    return (
        <div className={styles.cards}>
            {allImages.map(image =>
                <Image key={image} src={image} layout="fixed" height={300} width={200} alt="Sample photo" />)
            }
        </div>
    )
}


export default Products;