import styles from "./Home.module.css";
import Image from "next/image";
import { MapPin , Bell, Search } from 'lucide-react';
import DoctorCard from "@/component/Card/doctorCard";
import Menu from "@/component/menu/menu";   
import Link from "next/link";
export default function Home() {   
    return (  
        <div className={styles.homeContainer}>
            <div className={styles.profileContainer}>
                <div className={styles.imageContainer}>
                <Image src="/profile.jpg" alt="profile image" width={32} height={32} className={styles.profileImage}/>
                <div className={styles.nameContainer}>
                    <h2 className={styles.name}>John Doe</h2>
                    <p className={styles.location}><span className={styles.mapPin}><MapPin size={14} /></span>New York, USA</p>
                </div>
                </div>
                <div className={styles.notificationContainer}>
                    <Bell size={20} className={styles.bellIcon}/>
                    <span className={styles.notificationBadge}>3</span>
                </div>
            </div>
            <div className={styles.searchContainer}>                                                   
            <input type="search" placeholder="Search..."   className={styles.searchInput}/>
            <Search size={20} className={styles.searchIcon}/>
            </div>
            <Link href="/Doctor_details">
                <DoctorCard />
            </Link>
             <Link href="/Doctor_details">
                <DoctorCard />
            </Link>
             <Link href="/Doctor_details">
                <DoctorCard />
            </Link>

            <Menu />
        </div>
    )
    

}