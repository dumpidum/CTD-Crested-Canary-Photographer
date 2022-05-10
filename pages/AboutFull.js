import styles from '../styles/About.module.css';


function AboutFull() {
    return (
        <div className={styles.about}>
            <div >
                <img className={styles.image}
                    src="https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg"
                    alt="photographer"
                />
            </div>
            <div className={styles.container}>
                {/* <h1 class="font-weight-light">About Us</h1> */}

                <h3>Welcome to Photographer studio.</h3>
                <p>
                    Photos are about visual storytelling. In today’s media-rich environment, people often look first to images, then to words. With this in mind, it is important that every image be carefully selected to communicate with impact.<br />
                    Now you can share your images, showcase your work, deliver digital downloads, and sell your photos online in a beautiful modern gallery store built for photographers and their clients.<br />
                    Photographer studio proudly runs by its member photographers. Our mission is to help young professionals share and sale their works to the public. Our studio gallery contains both high-resolution images for use in print materials and low-resolution images for Web use.<br />
                    There is something for everyone in Photographer studio.
                                    </p>

            </div>

        </div>
    )
}

export default AboutFull;