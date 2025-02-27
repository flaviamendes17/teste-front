import styles from '../styles/Home.module.css';
import Card from '../componentes/Card';

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.bloco}>
                    <div className={styles.article}>
                        <Card title={'🍀 1. Amuleto da Sorte'} text={'O Ursinho Boa Sorte é facilmente reconhecido pelo seu trevo de quatro folhas na barriguinha. Esse símbolo é mundialmente associado à sorte e proteção. No universo dos Ursinhos Carinhosos, ele tem o poder de espalhar sorte para quem precisa e acredita que boas energias sempre encontram um caminho.'} />
                        <Card title={'✨2. Personalidade Alegre e Confiante'} text={'Diferente de outros personagens que podem ser céticos ou realistas, o Ursinho Boa Sorte é otimista ao extremo. Ele sempre acredita que tudo dará certo no final, mesmo nas situações mais difíceis. Sua confiança às vezes é tão grande que pode parecer exagerada, mas no fundo, ele realmente consegue atrair coisas boas com sua positividade.'} />
                        <Card title={'🧸3. Brinquedo Colecionável'} text={'O Ursinho Boa Sorte foi um dos modelos mais cobiçados por colecionadores. Em edições limitadas, ele veio com um trevo cintilante ou uma versão especial com um tom de verde diferente. Hoje, versões antigas desse ursinho podem valer muito entre fãs nostálgicos.'} />
                    </div>
                    <aside className={styles.aside}>
                        <img className={styles.imagebear} src="/bear.png" />
                    </aside>
                </div>
            </main>
        </div>
    );
}