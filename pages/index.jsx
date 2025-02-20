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
                            <h1> 🍀 1. Amuleto da Sorte</h1>
                            <p className={styles.texto}> O Ursinho Boa Sorte é facilmente reconhecido pelo seu trevo de quatro folhas na barriguinha. Esse símbolo é mundialmente associado à sorte e proteção. No universo dos Ursinhos Carinhosos, ele tem o poder de espalhar sorte para quem precisa e acredita que boas energias sempre encontram um caminho.</p>
                        </div>
                        <div className={styles.card}>
                            <h1>✨2. Personalidade Alegre e Confiante</h1>
                            <p className={styles.texto}>Diferente de outros personagens que podem ser céticos ou realistas, o Ursinho Boa Sorte é otimista ao extremo. Ele sempre acredita que tudo dará certo no final, mesmo nas situações mais difíceis. Sua confiança às vezes é tão grande que pode parecer exagerada, mas no fundo, ele realmente consegue atrair coisas boas com sua positividade.</p>
                        </div>
                        <div className={styles.card}>
                            <h1>🧸3. Raro Brinquedo Colecionável</h1>
                            <p className={styles.texto}>Os Ursinhos Carinhosos tiveram vários lançamentos ao longo dos anos, mas o Ursinho Boa Sorte foi um dos modelos mais cobiçados por colecionadores. Em algumas edições limitadas, ele veio com um trevo cintilante ou até mesmo uma versão especial com um tom de verde diferente. Hoje, versões antigas desse ursinho podem valer centenas de dólares entre fãs nostálgicos.</p>
                        </div>
                    </div>
                    <aside className={styles.aside}>
                        <img className={styles.imagebear} src="/bear.png" />
                    </aside>
                </div>
            </main>
            <footer className={styles.footer}>
                <p>© 2025 Ursinhos Carinhosos. Todos os direitos reservados a Flavia Mendes.</p>
            </footer>
        </div>
    );
}