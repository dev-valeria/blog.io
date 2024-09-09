import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Post.module.css';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fakePosts = [
        {
          id: 1,
          title: 'Oração para proteção de Arcanjo Miguel',
          image: require('../../imgs/arcanjoMiguel.jpg'),
          body: `
            O ritual de oração dos 21 dias do Arcanjo Miguel tem como objetivo fazer uma limpeza espiritual,
            assim libertando das limitações que impedem sua vida de fluir.
            Cultuado em diversas religiões, o Arcanjo Miguel é protetor e líder do exército de Deus, 
            uma vez que combate todos os poderes do mal. Desse modo, a oração de São Miguel Arcanjo deve 
            ser realizada durante o tempo previsto, sem interrupções. Passado este período,
            a clareza e tranquilidade vão imperar em todas as esferas da vida.`,
          body1: `
            Eu apelo ao Cristo para acalmar meus medos e para apagar todo mecanismo 
            de controle externo que possa interferir com esta cura. Eu peço a meu Eu 
            Superior que feche minha aura e estabeleça um canal Crístico para os propósitos 
            de minha cura, para que só as energias Crísticas possam fluir até mim.`,
          body2: `
            Não se poderá fazer outro uso deste canal que não seja para o fluxo de energias Divinas.
            Agora apelo ao Arcanjo Miguel, da 13ª Dimensão, para que sele e proteja completamente esta sagrada experiência. 
            Agora apelo ao Círculo de Segurança da 13ª dimensão para que sele, proteja e aumente completamente o escudo de Miguel Arcanjo, 
            assim como para que remova qualquer coisa que não seja de natureza Crística e que exista atualmente dentro deste campo.
            Agora apelo aos Mestres Ascensionados e a nossos assistentes Crísticos para que removam e dissolvam completamente, 
            todos e cada um dos implantes e suas energias semeadas, parasitas, armas espirituais e dispositivos de limitação autoimpostos, 
            tanto conhecidos como desconhecidos. Uma vez completado isso, apelo pela completa restauração e reparação do campo de energia original,
            infundido com a energia dourada de Cristo.`,
          body3: `
            Eu sou livre! Eu sou livre! Eu sou livre! Eu sou livre! Eu sou livre! Eu sou livre! Eu sou livre!`,
          body4: `
            Eu, o ser conhecido como (declare seu nome) nesta encarnação particular, por este meio revogo e renuncio a todos e cada um dos compromissos de fidelidade, 
            votos, acordos e/ou contratos de associação que já não servem a meu bem mais elevado, nesta vida, vidas passadas, vidas simultâneas, 
            em todas as dimensões, períodos de tempo e localizações. Eu agora ordeno a todas as entidades (que estão ligadas com esses contratos, 
            organizações e associações às que agora renuncio) que cessem e desistam e que abandonem meu campo de energia agora e para sempre 
            e em forma retroativa, levando seus artefatos, dispositivos e energias semeadas.`,
          body5: `
            Havendo declarado tudo isto eu agora autorizo ao Cristo e ao meu próprio Eu Superior para que façam mudanças em minha vida para acomodar esta nova dedicação 
            e peço ao Espírito Santo que testemunhe isto também. Eu agora declaro isto a Deus. Que seja escrito no Livro da Vida. Que assim seja. Graças a Deus.`,
          body6: `
            O mais importante, eu me perdôo a mim mesmo, por tudo o que necessite ser perdoado entre minhas encarnações passadas e meu Eu Superior.
            Estamos agora coletivamente curados e perdoados, curados e perdoados, curados e perdoados. Todos estamos agora elevados a nossos seres Crísticos.`,
          body7: `
            Eu peço ao Senhor Metatron que nos libere das cadeias da dualidade. Eu peço que o selo do Domínio do Cristo seja colocado sobre mim.
            Eu peço ao Espírito Santo que testemunhe que isto se cumpra. E assim é.`,
        },
{
  id: 2,
  title: 'Mercúrio Retrógrado: O Que Você Precisa Saber',
  image: require('../../imgs/mercurioRetrogrado.jpg'),
  body: `O Que é Mercúrio Retrógrado?`,
  body1: `Mercúrio Retrógrado é um fenômeno astrológico que ocorre quando Mercúrio parece se mover para trás no céu em relação à Terra. Acontece três a quatro vezes por ano e dura cerca de três semanas cada vez. Muitos acreditam que isso pode impactar nossa vida cotidiana.`,
  body2: `Como Mercúrio Retrógrado Afeta a Nossa Vida? Durante esse período, áreas como comunicação, tecnologia e viagens podem enfrentar desafios. É comum observar problemas técnicos, mal-entendidos e atrasos.`,
  body3: `Comunicação e Tecnologia: Durante Mercúrio Retrógrado, mal-entendidos e dificuldades na comunicação são frequentes. Revise documentos e mensagens antes de enviá-los e mantenha a paciência. Problemas técnicos, como falhas em dispositivos e software, também podem surgir. Faça backups regulares e evite iniciar projetos tecnológicos importantes.`,
  body4: `Viagens: Atrasos e imprevistos em viagens são comuns. Verifique os detalhes da sua viagem e esteja preparado para mudanças de planos.`,
  body5: `Como Aproveitar Mercúrio Retrógrado: Use este tempo para refletir e revisar aspectos da sua vida. Reavalie seus objetivos e projetos antigos, e aproveite para resolver conflitos e melhorar a comunicação com os outros.`,
  body6: `Conclusão: Mercúrio Retrógrado pode trazer desafios, mas também oferece uma chance de crescimento e reflexão. Prepare-se e mantenha uma atitude positiva para navegar por esse período com mais tranquilidade.`,
        },
{

  id: 3,
  title: 'Meditação: Técnicas para Iniciantes',
  image: require('../../imgs/meditacao.jpg'),
  body: `Introdução à Meditação`,
  body1: `Meditar é uma prática poderosa que tem sido utilizada ao longo dos séculos para promover a saúde mental e emocional. A meditação pode ajudar a reduzir o estresse, melhorar o foco e criar uma sensação de paz interior. Para iniciantes, é recomendável começar com sessões curtas, de 5 a 10 minutos, e aumentar gradualmente à medida que você se torna mais confortável com a prática.`,
  body2: `Escolha um ambiente tranquilo e confortável onde você possa sentar sem ser perturbado. A posição pode ser sentada em uma cadeira, no chão com as pernas cruzadas ou deitado, desde que você se sinta confortável e alerta. Feche os olhos, concentre-se na sua respiração e observe o fluxo natural do ar entrando e saindo dos seus pulmões. Se sua mente começar a divagar, gentilmente traga seu foco de volta à respiração. Para orientação, você pode usar aplicativos de meditação guiada que oferecem instruções e técnicas variadas.`,
  body3: `Benefícios da Meditação: A prática regular de meditação pode levar a melhorias significativas em diversas áreas da sua vida. Estudos mostram que a meditação pode aumentar a concentração e a clareza mental, reduzir sintomas de ansiedade e depressão, e promover uma sensação geral de bem-estar. Além disso, a meditação pode ajudar a melhorar a qualidade do sono e fortalecer o sistema imunológico. Explore diferentes técnicas, como a meditação mindfulness, a meditação transcendental e a meditação guiada, para encontrar aquela que mais ressoa com você.`,
  body4: `Conclusão: Incorporar a meditação em sua rotina diária pode trazer muitos benefícios para sua saúde mental e emocional. É importante começar de forma gradual e ser consistente para experimentar os efeitos positivos ao longo do tempo. Lembre-se de que a meditação é uma prática pessoal e não há uma maneira certa ou errada de meditar. Encontre um estilo que funcione para você e aproveite o processo de autodescoberta e crescimento que a meditação pode proporcionar.`,

}

      ];

      const post = fakePosts.find(post => post.id === parseInt(id));
      setPost(post);
      setLoading(false);
    }, 1000); // Simulando um atraso de 1 segundo
  }, [id]);

  return (
    <div className={styles.postContainer}>
      {loading && <p>Carregando...</p>}
      {!loading && post && (
        <div className={styles.post}>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <p>{post.body1}</p>
          <p>{post.body2}</p>
          <p>{post.body3}</p>
          <p>{post.body4}</p>
          <p>{post.body5}</p>
          <p>{post.body6}</p>
          <p>{post.body7}</p>
        </div>
      )}
      {!loading && !post && (
        <p>Post não encontrado.</p>
      )}
    </div>
  );
};

export default Post;

