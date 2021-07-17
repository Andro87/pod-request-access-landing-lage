import Head from "next/head";
import { useRef, useState } from "react";

import styles from "../styles/Home.module.scss";

export default function Home() {
    const email = useRef<HTMLInputElement>();
    const [message, setMessage] = useState<string>();
    return (
        <div className={styles.main_container}>
            <Head>
                <title>Frontend Mentor | Pod request access landing page</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/images/favicon-32x32.png" />
            </Head>

            <div className={styles.container}>
                <header className={styles.header}>
                    <img src="/images/desktop/logo.svg" alt="logo" />
                </header>
                <picture
                    className={styles.picture}
                    role="img"
                    aria-label="image host"
                >
                    <source
                        srcSet="/images/desktop/image-host.jpg"
                        media="(min-width:950px)"
                    />
                    <source
                        srcSet="/images/tablet/image-host.jpg"
                        media="(min-width:550px)"
                    />
                    <img src="/images/tablet/image-host.jpg" alt="" />
                </picture>

                <main className={styles.main}>
                    <h1>
                        PUBLISH YOUR PODCASTS <span>everywhere.</span>
                    </h1>
                    <p>
                        Upload your audio to Pod with a single click. We’ll then
                        distribute your podcast to Spotify, Apple Podcasts,
                        Google Podcasts, Pocket Casts and more!
                    </p>
                    <div className={styles.wrap}>
                        <img
                            src="/images/desktop/spotify.svg"
                            alt="spotify-logo"
                        />

                        <img
                            src="/images/desktop/apple-podcast.svg"
                            alt="app-logo"
                        />

                        <img
                            src="/images/desktop/google-podcasts.svg"
                            alt="googl-elogo"
                        />

                        <img
                            src="/images/desktop/pocket-casts.svg"
                            alt="pocket-logo"
                        />
                    </div>
                    <form
                        className={styles.form}
                        noValidate
                        onSubmit={e => {
                            const value = email.current?.value;
                            const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
                            e.preventDefault();
                            if (value === "" || typeof value === "undefined") {
                                return setMessage(
                                    " Oops! Please check your email"
                                );
                            }
                            if (!value.match(re)) {
                                return setMessage(
                                    "  Oops! Please check your email"
                                );
                            }
                            setMessage(undefined);
                        }}
                    >
                        <input
                            className={styles.input}
                            type="email"
                            aria-label="email"
                            placeholder="Email address"
                            ref={email}
                        />
                        <button
                            type="submit"
                            name="button"
                            title="button"
                            className={styles.button}
                        >
                            Request access
                        </button>
                        {typeof message !== "undefined" ? (
                            <p className={styles.error_message}>{message}</p>
                        ) : null}
                    </form>
                </main>
            </div>

            <div className={styles.pattern} role="presentation">
                <img src="/images/desktop/bg-pattern-dots.svg" alt="" />
            </div>
        </div>
    );
}
