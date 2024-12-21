import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.container}>
            <h1 className="title">Milan Fulop</h1>
            <p className="description">web developer & designer</p>
            <br/>
            <nav className={styles.buttonContainer}>
                <button>Myself</button>
                <button>Projects</button>
                <button>Socials</button>
            </nav>
        </div>
    );
}
