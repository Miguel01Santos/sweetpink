import "./App.css";
import banoffe from "./img/banofe.jpg";
import boloParaCorte from "./img/boloParaCorte.jpg";
import boloPoteMorango from "./img/boloPoteMorango.jpg";
import brownieRecheados from "./img/brownieRecheados.jpg";
import coneBeijinho from "./img/coneBeijinho.jpg";
import coneOreo from "./img/coneOreo.jpg";
import logo from "./img/logotipo.jpg";
import miniboloNinhoComNutella from "./img/miniBoloNinhoNutella.jpg";
import miniboloOreo from "./img/miniBoloOreo.jpg";

function App() {
  return (
    <div className="containerApp">
      <section className="aboutStore">
        <div className="title-mark">
          <span>Sweet Pink Doces Gourmet</span>
        </div>
        <div className="contact">
          <span>Localizado em São José do Rio Preto - São Paulo</span>
          <div className="fone">
            <i class="bi bi-telephone-fill"></i>
            <span>17 99116-7008</span>
          </div>
          <div className="email">
            <i class="bi bi-envelope-fill"></i>
            <span>sweetpinkconfeitaria@gmail.com</span>
          </div>
        </div>
        <div className="midias">
          <a href="https://www.instagram.com/sweetpinkgourmet?igsh=MTZ2aGtqdzQzdDc3ag==" target="blank"><i class="bi bi-instagram"></i></a>
          <a href="https://www.instagram.com/sweetpinkgourmet?igsh=MTZ2aGtqdzQzdDc3ag==" target="blank"><i class="bi bi-facebook"></i></a>
          <i class="bi bi-whatsapp"></i>
          
        </div>
      </section>
      <header className="headerPage">
        <div className="tela">
          <div className="containerLogotipo">
            <a href="https://www.ifood.com.br/delivery/sao-jose-do-rio-preto-sp/sweet-pink-jardim-dos-buritis/d69e98f1-ac4f-4195-9408-0162225f5611" target="blank"><img className="sweet" src={logo} alt="" /></a>
            
          </div>
          <div className="containerDegrade">
            <div className="containerDegrade2">
              <span className="mark">Sweet Pink</span>
              <span className="slogan">O Rosa Mais Doce</span>
            </div>
          </div>
        </div>
      </header>
      <div className="aboutSweet">
        <div className="script">
          <span>
            Na Sweet Pink, nossa especialidade é transformar momentos em sabores
            únicos, combinando a energia de uma confeitaria jovem com a
            sabedoria das tradições da culinária doce. Nosso destaque principal
            é a famosa torta <span className="banoffeeText">Banoffee</span>, uma
            combinação perfeita de doce de leite, banana e chantilly. Venha
            provar e se encantar!
          </span>
        </div>
        <div className="menu">
          <span>Cardápio</span>
        </div>
      </div>
      <main className="mainPage">
        <div className="containerMain1">
          <div className="product">
            <img className="foto" src={banoffe} alt=""/>
            <span className="titleProduct">Torta Banoffee</span>
          </div>
          <div className="product">
            <img className="foto" src={boloParaCorte} alt=""/>
            <span className="titleProduct">Bolo para Corte</span>
          </div>
          <div className="product">
            <img className="foto" src={coneOreo} alt=""/>
            <span className="titleProduct">Cone com Oreo</span>
          </div>
          <div className="product">
            <img className="foto" src={brownieRecheados} alt=""/>
            <span className="titleProduct">Brownies Recheados</span>
          </div>
        </div>
        <div className="containerMain2">
          <div className="product">
            <img className="foto" src={boloPoteMorango} alt=""/>
            <span className="titleProduct">Bolos de Pote</span>
          </div>
          <div className="product">
            <img className="foto" src={coneBeijinho} alt=""/>
            <span className="titleProduct">Cone de Beijinho</span>
          </div>
          <div className="product">
            <img className="foto" src={miniboloNinhoComNutella} alt=""/>
            <span className="titleProduct">Mini Bolo Ninho Nutella</span>
          </div>
          <div className="product">
            <img className="foto" src={miniboloOreo} alt=""/>
            <span className="titleProduct">Mini Bolo de Oreo</span>
          </div>
        </div>
      </main>
      <div className="aboutUs">
        <span>
          Localizada em São José do Rio Preto, a Sweet Pink é referência em
          doces gourmet que combinam sabor, sofisticação e criatividade.
          Atendemos nossos clientes pelo iFood e também trabalhamos com
          encomendas personalizadas, seja para pedidos especiais fora do
          cardápio, opções exclusivas do nosso menu ou doces em grandes
          quantidades para festas. Aqui, cada doce é feito com cuidado e
          ingredientes de alta qualidade, tornando cada momento ainda mais doce
          e inesquecível. ✨
        </span>
        <img className="sweetLogo" src={logo} alt=""/>
      </div>

      <footer>
        <span>Sweet Pink ! A Rosa Mais Doce</span>
      </footer>
    </div>
  );
}

export default App;
