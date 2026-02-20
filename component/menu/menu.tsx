import styles from "./menu.module.css"; 
import { Home, User, CalendarDays, ClipboardClock } from 'lucide-react';
import Link from "next/link";
export default function Menu() {
    return (
        <div className={styles.menuContainer}>
            <Link href="/home" className={styles.menuLink}><div className={styles.menuItem}>
                <Home size={24} className={styles.menuIcon} />
                <span className={styles.menuText}>Home</span>
            </div>
            </Link>
            <div className={styles.menuItem}>
                <CalendarDays size={24} className={styles.menuIcon} />
                <span className={styles.menuText}>Appointments</span>
            </div>
            <div className={styles.menuItem}>
                <ClipboardClock size={24} className={styles.menuIcon} />
                <span className={styles.menuText}>History</span>
            </div>
            <div className={styles.menuItem}>
                <User size={24} className={styles.menuIcon} />
                <span className={styles.menuText}>Profile</span>
            </div>
            
        </div>
    )
}