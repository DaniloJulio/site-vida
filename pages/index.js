import React, { useState, useEffect } from 'react';

function Home() {
    const [elapsedTime, setElapsedTime] = useState('');

    useEffect(() => {
        const startDate = new Date('2014-05-16T00:00:00');
        const updateElapsedTime = () => {
            const now = new Date();
            const diff = now - startDate;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setElapsedTime(`${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`);
        };

        const intervalId = setInterval(updateElapsedTime, 1000);
        updateElapsedTime(); // Atualiza imediatamente

        return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Esse site foi feito para dizer que eu amo você, minha vida!</h1>
            <img 
                src="https://img.freepik.com/vetores-premium/mulher-de-cabelo-afro-acariciando-cabeca-de-gato-preto-e-branco-ilustracao-de-avatar-vetorial-2d-senhora-afro-americana-adotando-gatinho-contorno-personagem-de-desenho-animado-rosto-isolado-amante-de-animais-de-estimacao-imagem-de-perfil-de-usuario-plana-feminina_151150-21065.jpg" 
                alt="Uma imagem especial" 
                style={styles.image} 
            />
            <p style={styles.timer}>
                Já te amo há <strong>{elapsedTime}</strong> e amarei por toda a eternidade!
            </p>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        marginTop: '50px',
    },
    title: {
        color: '#333',
        fontSize: '24px',
        marginBottom: '20px',
    },
    image: {
        width: '300px',
        height: 'auto',
        borderRadius: '10px',
        marginBottom: '20px',
    },
    timer: {
        color: '#555',
        fontSize: '18px',
    },
};

export default Home;
