import React from "react";
import styles from '../styles/Inquiry.module.css';

function Inquiry() {
    return (
        <div className={styles.container}>
            <h1 id="title" className={styles.textCenter}> Contact form </h1>
            <div >
                <form id="survey-form">

                    <div className={styles.formGroup}>
                        <label id="name-label" for="inputname">First and last name</label>
                        <div className={styles.name}>
                            <input type="text"
                                className={styles.formControlName}
                                id="First_name"
                                placeholder="First name" required
                            />
                            <input type="text"
                                className={styles.formControlName}
                                id="Last_name"
                                placeholder="Last name" required
                            /></div>
                    </div>
                    <div className={styles.formGroup}>
                        <label id="email-label" for="inputemail"> Email </label>
                        <input type="email"
                            className={styles.formControl}
                            id="email"
                            name="email"
                            placeholder="email"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label id="phone-label" for="inputphone"> Phone number </label>
                        <input type="phone"
                            className={styles.formControl}
                            id="phone"
                            name="phone"
                            placeholder="111-222-3333"
                            required />
                    </div>
                    <div className={styles.formGroup}>
                        <label> Inquiry</label>
                        <textarea
                            id="coments"
                            className={styles.inputTextarea}
                            name="comment"
                            placeholder="Please enter your inquiry here...">

                        </textarea>
                    </div>
                    <div className={styles.formGroup}>
                        <button type="submit"
                            id="submit"
                            className={styles.submitButton}>Submit</button>
                    </div>
                </form>
            </div>
        </div>

    );
}
export default Inquiry;