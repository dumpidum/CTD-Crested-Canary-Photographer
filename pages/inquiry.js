import React from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/Inquiry.module.css';
import { toast } from 'react-toastify';

export default function ContactUs() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID, 'template_ri9kmmp', e.target, process.env.NEXT_PUBLIC_YOUR_USER_ID)
            .then((result) => {
                toast.success('email sent successfully');
            }, (error) => {
                toast.error('error sending email');
            });
        e.target.reset();
    }

    return (
        <div className={styles.container}>
            <h1 id="title" className={styles.textCenter}> Contact form </h1>
            <div >
                <form id="survey-form" onSubmit={sendEmail}>

                    <div className={styles.formGroup}>
                        <label id="name-label" htmlForm="inputname">First and last name</label>
                        <div className={styles.name}>
                            <input type="text" name="user_name"
                                className={styles.formControlName}
                                id="First_name"
                                placeholder="First name" required
                            />
                            <input type="text" name="user_last_name"
                                className={styles.formControlName}
                                id="Last_name"
                                placeholder="Last name" required
                            /></div>
                    </div>
                    <div className={styles.formGroup}>
                        <label id="email-label" htmlForm="inputemail"> Email </label>
                        <input type="email"
                            className={styles.formControl}
                            id="email"
                            name="user_email"
                            placeholder="email"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label id="phone-label" htmlForm="inputphone"> Phone number </label>
                        <input type="phone"
                            className={styles.formControl}
                            id="phone"
                            name="phone"
                            placeholder="111-222-3333"
                            required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlForm="type">Select type of work</label>

                        <select required className={styles.formControl} id="option" name="option">
                            <option value="" >- Please select -</option>
                            <option value="Portrait">Portrait</option>
                            <option value="Family">Family</option>
                            <option value="Event">Event</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Lanscape">Lanscape</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label> Inquiry</label>
                        <textarea
                            id="coments"
                            className={styles.inputTextarea}
                            name="message"
                            placeholder="Please enter your inquiry here...">

                        </textarea>
                    </div>
                    <div className={styles.formGroup}>
                        <button type="submit"
                            value="Send"
                            id="submit"

                            className={styles.submitButton}>Submit</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

    // export default inquiry
