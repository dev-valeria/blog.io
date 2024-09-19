import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import noventaEnoveimagem from '../../imgs/99imagem.jpg'
import gitHubCopilot from '../../imgs/gitHubCopilot.jpg'
import eloMusk from '../../imgs/eloMusk.jpg'


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
          id: 1, title: 'Musk provoca Moraes após X (Twitter) voltar no Brasil: ‘Magia avançada’.',
          body: 'Provocação do bilionário ao ministro do STF ocorre após usuários relatarem acesso ao X; Corte exige resposta da Anatel e representante dos provedores de internet acusa a rede social de burlar a determinação.',
          image: eloMusk

        },
        {
          id: 2, title: '99 usa IA para recuperar mais de 300 mil transações “perdidas” com cartão de crédito.',
          body: 'Acréscimo em conversão de pagamentos foi alcançado em apenas dois meses e aumentou o retorno sobre investimento (ROI) da 99.',
           image: noventaEnoveimagem
        },
        {
          id: 3,
          title: 'GitHub Copilot: o potencial da ferramenta em jornadas de desenvolvimento',
          image: require('../../imgs/gitHubCopilot.jpg'),
          body: `Com base na modalidade de IA generativa, foi lançado recentemente o GitHub Copilot: uma ferramenta desenvolvida pela OpenAI, em parceria com a GitHub, capaz de acelerar o processo programação.`,
        },
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


