import styles from '../styles/Home.module.css';
import Header from '../componentes/Header';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header>
                Teste
            </Header>
            <main className={styles.main}>
            <div className={styles.bloco}>
                <div className={styles.article}>
                    <div className={styles.card}>
                    </div>
                    <div className={styles.card}>
                    </div>
                    <div className={styles.card}>
                    </div>
                </div>
                <aside className={styles.aside}>
            <img className={styles.imagebear} src="/bear.png" />
            </aside>
            </div>
            </main>
        </div>
    );
}