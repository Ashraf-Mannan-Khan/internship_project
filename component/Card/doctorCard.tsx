import styles from "./Card.module.css";
import { Heart } from 'lucide-react';
import Image from "next/image";
export default function DoctorCard() {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <Image src="/doctor.png" alt="Doctor Image" width={100} height={100} className={styles.doctorImage} />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.loveContainer}>  
                <h3 className={styles.doctorName}>Dr. Jane Smith</h3>
                <span className={styles.loveIcon}>
                    <Heart size={24} className={styles.heartIcon} />
                    </span> 
                </div>   
                <p className={styles.specialization}>Cardiologist</p>
                <p className={styles.availability}>Available Today</p>
                <p className={styles.about}>Dr. Jane Smith is a highly experienced cardiologist with over 15 years of practice...</p>
                <p className={styles.timings}>9:00 AM - 5:00 PM</p>
            </div>
        </div>
    )
}
