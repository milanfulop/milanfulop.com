"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: "about", offset: document.getElementById("about")?.offsetTop || 0 },
                { id: "projects", offset: document.getElementById("projects")?.offsetTop || 0 },
                { id: "socials", offset: document.getElementById("socials")?.offsetTop || 0 },
            ];

            const scrollPosition = window.scrollY + window.innerHeight / 2;

            let currentSection = "about";
            for (let i = sections.length - 1; i >= 0; i--) {
                if (scrollPosition >= sections[i].offset - 200) {
                    currentSection = sections[i].id;
                    break;
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (id: string) => {
        if (id === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div className={styles.container}>
            <h1 className="title">Milan Fulop</h1>
            <p className="description">web developer & designer</p>
            <br />
            <nav className={styles.buttonContainer}>
                <button
                    onClick={() => scrollToSection("top")}
                    style={{
                        background: activeSection === "about" ? "rgba(255, 255, 255, 0.1)" : "transparent",
                    }}
                >
                    Myself
                </button>
                <button
                    onClick={() => scrollToSection("projects")}
                    style={{
                        background: activeSection === "projects" ? "rgba(255, 255, 255, 0.1)" : "transparent",
                    }}
                >
                    Projects
                </button>
                <button
                    onClick={() => scrollToSection("socials")}
                    style={{
                        background: activeSection === "socials" ? "rgba(255, 255, 255, 0.1)" : "transparent",
                    }}
                >
                    Socials
                </button>
            </nav>
        </div>
    );    
}
