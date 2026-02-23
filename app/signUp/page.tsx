"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import styles from "./signUp.module.css";
import Image from "next/image";
import Link from "next/link";
import "../font.css";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("name", name);
    router.push("/auth"); 

  };



  return (
    <div className={styles.loginContainer}>
      <div className={styles.logoContainer}>
        <h2 className={styles.logo}>Your Logo</h2>
      </div>

      <h2 className={styles.loginHeading}>Login</h2>

      <div>
        <div className={styles.contactContainer}>
          <label htmlFor="name" className={styles.label}>
          Name
          </label>

          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Name"
            className={styles.contactInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
         <div className={styles.contactContainer}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="username"
            placeholder="Email"
            className={styles.contactInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

        <form onSubmit={handleSignUp}>
        <button className={styles.loginButton} type="submit">Sign Up</button>
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
        Do have an account? <span className={styles.signUp} onClick={() => router.push("/")}>Login Up</span>
      </p>
    </div>
  );
}
