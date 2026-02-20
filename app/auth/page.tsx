"use client";
import { MoveLeft } from "lucide-react";
import styles from "./auth.module.css";
import "../font.css";
import { useRef } from "react";
import Link from "next/link";
export default function Auth() {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.target.value && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };
  return (
    <div className={styles.authContainer}>
      <div className={styles.arrowContainer}>
    <MoveLeft size={24} className={styles.backButton} />
        <h2>OTP Code verification </h2>
      </div>
      <div className={styles.otpContainer}>
        <p className={styles.otpPara}>
          Code has been sent to <span>+91 1234567890</span>
        </p>
        <div className={styles.otpInputContainer}>
          {[...Array(4)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className={styles.otpInput}
              ref={(el) => {
                inputs.current[index] = el;
              }}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
        <p className={styles.resend}>
          Resend code in <span className={styles.time}>00:59</span> s
        </p>
      </div>
      <Link href="/home">
        <button className={styles.verifyButton}>Verify</button>
      </Link>
    </div>
  );
}
