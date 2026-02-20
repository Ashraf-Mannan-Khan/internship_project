"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";
import Image from "next/image";
import Link from "next/link";
import "../font.css";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [contact, setContact] = useState("");
  

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  

  const regex =
    /(^[^\s@]+@[^\s@]+\.[^\s@]+$)|(^(\+91|91|0)?[6-9]\d{9}$)/;
  if (regex.test(contact)) {
    router.push("/auth"); 
  } else {
    alert("Please enter a valid email or mobile number.");  
  }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.logoContainer}>
        <h2 className={styles.logo}>Your Logo</h2>
      </div>

      <h2 className={styles.loginHeading}>Login</h2>

      <div>
        <div className={styles.contactContainer}>
          <label htmlFor="contact" className={styles.label}>
            Mobile/Email
          </label>

          <input
            id="contact"
            type="text"
            autoComplete="username"
            placeholder="Login with Mobile or Email"
            pattern="(^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$)|(^(\+91|91|0)?[6-9]\\d{9}$)"
            className={styles.contactInput}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
      </div>

      <div className={styles.checkboxContainer}>
        <label className={styles.rememberLabel}>
          <input type="checkbox" className={styles.rememberCheckbox} />
          Remember Me
        </label>
        <p className={styles.forgotPara}>Forgot password?</p>
      </div>

        <form onSubmit={handleLogin}>
        <button className={styles.loginButton} type="submit">Login</button>
      </form>

      <p className={styles.paragraph}>
        <span className={styles.orLoginWith}>Or login With</span>
      </p>

      <button className={styles.googleButton}>
        <Image
          src="/google.png"
          alt="google image"
          width={20}
          height={20}
          className={styles.google}
        />
        <span className={styles.googlePara}>Continue with Google</span>
      </button>

      <p className={styles.signUpParagraph}>
        Don't have an account? <span className={styles.signUp}>Sign Up</span>
      </p>
    </div>
  );
}
