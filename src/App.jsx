import './App.css';
import Card from "../components/card"; // Corrigido para corresponder ao nome do arquivo

const perfilData = {
  nome: 'Lucas Silva',
  idade: 6,
  avatar: 'https://i.pinimg.com/736x/13/e7/9d/13e79dfaa493be4b88f62d057073d86b.jpg',
  historico: [
    { atividade: 'Cores e Formas', data: '20/06/2025' },
    { atividade: 'Jogo da Memória', data: '18/06/2025' },
    { atividade: 'Complete a Palavra', data: '15/06/2025' }
  ]
};

const atividades = [
  {
    title: 'Cores e Formas',
    description: 'Ajude a criança a identificar cores e formas.',
    image: 'https://i.pinimg.com/736x/6f/27/fd/6f27fdc55d8157d5d5a326ba6e63c27a.jpg'
  },
  {
    title: 'Jogo da Memória',
    description: 'Desenvolva a memória com figuras divertidas.',
    image: 'https://i.pinimg.com/736x/32/0c/64/320c64ed31ae33bad13eded5dc804531.jpg'
  },
  {
    title: 'Complete a Palavra',
    description: 'Atividade de reforço da alfabetização.',
    image: 'https://i.pinimg.com/736x/a7/d7/d5/a7d7d54a4d4393f0505b4c3ebf5aba91.jpg'
  }
];

const livros = [
  {
    titulo: 'Como Você Se Sente?',
    descricao: 'Um livro interativo para explorar emoções.',
    imagem: 'https://i.pinimg.com/736x/73/ad/d9/73add98f0bff4c06e857fbe43a7c3e36.jpg',
    link: 'https://leiturinha.com.br/blog/livros-sobre-sentimentos-infantis/'
  },
  {
    titulo: 'O Monstro das Cores',
    descricao: 'Ajuda as crianças a identificar e nomear emoções.',
    imagem: 'https://i.pinimg.com/736x/f7/83/e4/f783e421fa46a57dfd7d45125d2d9393.jpg',
    link: 'https://leiturinha.com.br/blog/livros-sobre-sentimentos-infantis/'
  },
  {
    titulo: 'A Raiva Não É Um Bicho-Papão',
    descricao: 'Ensina que sentir raiva é normal e como lidar com isso.',
    imagem: 'https://i.pinimg.com/originals/54/98/c6/5498c63f5606637bbea83cde30acac6c.png',
    link: 'https://leiturinha.com.br/blog/livros-sobre-sentimentos-infantis/'
  }
];

export default function App() {
  return (
    <div className="app-bg">
      <div className="main-container">
        <h1 className="titulo-artistick">
          🌟 Protótipo Educacional 🌟
        </h1>

        {/* Tela 1: Perfil da Criança */}
        <section className="secao">
          <h2 className="secao-titulo">👦 Perfil da Criança</h2>
          <div className="perfil">
            <img src={perfilData.avatar} alt="Avatar" className="avatar" />
            <div>
              <p className="perfil-nome"><strong>Nome:</strong> {perfilData.nome}</p>
              <p className="perfil-idade"><strong>Idade:</strong> {perfilData.idade} anos</p>
            </div>
          </div>
          <h3 className="historico-titulo">📝 Histórico de Atividades</h3>
          <ul className="historico-lista">
            {perfilData.historico.map((item, i) => (
              <li key={i}>{item.atividade} - {item.data}</li>
            ))}
          </ul>
        </section>

        <hr className="divider" />

        {/* Tela 2: Atividades Recomendadas */}
        <section className="secao">
          <h2 className="secao-titulo">🎲 Atividades Recomendadas</h2>
          <div className="cards">
            {atividades.map((atividade, i) => (
              <Card
                key={i}
                title={atividade.title}
                description={atividade.description}
                image={atividade.image}
              />
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* Tela 3: E-books / Tutoriais */}
        <section className="secao">
          <h2 className="secao-titulo">📚 Tutoriais e E-books</h2>
          <div className="cards">
            {livros.map((livro, i) => (
              <Card
                key={i}
                title={livro.titulo}
                description={livro.descricao}
                image={livro.imagem}
                link={livro.link}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}