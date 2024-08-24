import './style/App.css'
import Header from './Components/Header'
import Carrousel from './Components/Carrousel';
import Card from './Components/Card';

function App () {

  const cards = [
    {
      caminhoImagem: 'https://via.placeholder.com/250',
      titulo: 'Card 1',
      descricao: 'Lorem ipsum dolor sit amet. Sed voluptas fuga ut rerum maiores qui impedit animi. 33 iure minus ea quia adipisci et quaerat deserunt et alias earum sit consectetur pariatur! Eum soluta nostrum aut voluptas neque sit illum nesciunt.',
    },
    {
      caminhoImagem: 'https://via.placeholder.com/250',
      titulo: 'Card 2',
      descricao: 'Lorem ipsum dolor sit amet. Et neque molestiae qui veritatis vero et sunt autem qui similique Quis est commodi ratione aut voluptas nihil et veniam doloribus. Eos deleniti possimus et quia quaerat et nulla quae et numquam quisquam 33 atque aliquid.',
    },
    {
      caminhoImagem: 'https://via.placeholder.com/250',
      titulo: 'Card 3',
      descricao: 'Lorem ipsum dolor sit amet. Nam velit ratione sed quia voluptatem eos earum quia in autem dolores aut sequi totam aut saepe atque in neque rerum. Est quam molestiae aut incidunt nostrum non voluptatem cumque.',
    },
  ];

  return (
      <div className="container">
         <Header />
        <Carrousel>
          {cards.map((card, index) => (
            <Card key={index} caminhoImagem={card.caminhoImagem} titulo={card.titulo} descricao={card.descricao} />
          ))}
        </Carrousel>
      </div>
  )
}

export default App;
