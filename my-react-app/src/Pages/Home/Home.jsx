import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import arcanjoMiguelImage from '../../imgs/arcanjoMiguel.jpg'
import mercurioRetrogrado from '../../imgs/mercurioRetrogrado.jpg'


// Componente para exibir detalhes de cada post
const PostDetail = ({ post }) => (
  <div className={styles.post}>
    <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} />
    
    <p>{post.body}</p>
    <Link to={`/posts/${post.id}`} className={styles.btn}>
      Ler mais
    </Link>
  </div>
);

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const fakePosts = [
        {
          id: 1, title: 'Oração para proteção de Arcajo Miguel',
          body: 'Um dos três mensageiros divinos de Deus, São Miguel simboliza a justiça e a intercessão diante do eterno.',
          image: arcanjoMiguelImage

        },
        {
          id: 2, title: 'Mercúrio Retrógrado: O Que Você Precisa Saber',
          body: 'Mercúrio Retrógrado é um fenômeno astrológico que ocorre quando o planeta Mercúrio parece estar se movendo para trás no céu em relação à Terra.',
           image: mercurioRetrogrado
        },
        {
          id: 3,
          title: 'Meditação: Técnicas para Iniciantes',
          image: require('../../imgs/meditacao.jpg'),
          body: `Meditar é uma prática poderosa que tem sido utilizada ao longo dos séculos para promover a saúde mental e emocional.`,
        },
        { id: 4, title: 'Post 4', body: 'Este é o conteúdo do post 4.' },
  
        { id: 5, title: 'Post 5', body: 'Este é o conteúdo do post 5.' },
        { id: 6, title: 'Post 6', body: 'Este é o conteúdo do post 5.' },

      ];
      setPosts(fakePosts);
      setLoading(false);
    }, 1000); // Simulando um atraso de 1 segundo
  }, []);

  // Função de submit para a pesquisa de posts
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.home}>
      <h1>Veja nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={styles.btnDark}>Pesquisar</button>
      </form>
      <div className={styles.postsContainer}>
        {loading && <p>Carregando...</p>}
        {!loading && posts.length > 0 && posts.map((post) => (
          <PostDetail key={post.id} post={post} />
        ))}
        {!loading && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className={styles.btn}>
              Criar primeiro post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;


