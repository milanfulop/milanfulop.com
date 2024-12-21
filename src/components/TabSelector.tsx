"use client";

import { useState, useMemo } from 'react';
import styles from './TabSelector.module.css';

import About from './tabs/About';
import Projects from './tabs/Projects';

type TabTypes = "about" | "projects";
type TabsMap = Record<TabTypes, React.ReactNode>;

export default function TabSelector() {
    const [currentTab, setCurrentTab] = useState<TabTypes>("about");

    const tabs = useMemo<TabsMap>(
        () => ({
            about: <About />,
            projects: <Projects />,
        }),
        []
    );

    return (
        <div className={styles.container}>
            <nav>
                <button onClick={() => setCurrentTab("about")}>About</button>
                <button onClick={() => setCurrentTab("projects")}>Projects</button>
            </nav>
            <div>{tabs[currentTab]}</div>
        </div>
    );
}
