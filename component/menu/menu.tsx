"use client";
import styles from "./menu.module.css"; 
import { Home, User, CalendarDays, ClipboardClock } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Menu() {
    const pathname = usePathname();
    return (
        <div className={styles.menuContainer}>
            <Link href="/home" className={`${styles.menuLink} ${pathname === '/home' ? styles.active : ''}`}><div className={styles.menuItem}>
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