"use client";
import { MoveLeft } from "lucide-react";
import styles from "./auth.module.css";
import "../font.css";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Auth() {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
 const otp = Math.floor(1000 + Math.random() * 9000);
// For demonstration purposes only. Remove in production.
 
  
  const router = useRouter();
// For demonstration purposes only. Remove in production.
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.target.value && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>,
  index: number
) => {
  if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
    inputs.current[index - 1]?.focus();
  }
};

  const verifyOTP = () => {
    // Implement OTP verification logic here
    const enteredOTP = inputs.current.map(input => input?.value || '').join('');
    if (enteredOTP === otp.toString()) {
      router.push("/home"); // Redirect to home page on successful verification 
  } else {
    alert("Invalid OTP. Please try again. Your OTP is: " + otp); // For demonstration purposes only. Remove in production.    
  
  }
  }
  alert("Your OTP is: " + otp); // For demonstration purposes only. Remove in production.

  return (
    <div className={styles.authContainer}>
      <div className={styles.arrowContainer}>
    <MoveLeft size={24} className={styles.backButton} onClick={() => router.back()} />
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
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
        <p className={styles.resend}>
          Resend code in <span className={styles.time}>00:59</span> s
        </p>
      </div>
 
        <button className={styles.verifyButton} onClick={verifyOTP }>Verify</button>
 
    </div>
  );
}
