import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import Header from '../componentes/Header';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className={styles.container}>
                    <Header>
                        Teste
                    </Header>
                    <main className={styles.main}>
                        {children}
                    </main>
                    <footer className={styles.footer}>
                        <p>© 2025 Ursinhos Carinhosos. Todos os direitos reservados a Flavia Mendes.</p>
                    </footer>
                </div>
            </body>
        </html>
    );
}