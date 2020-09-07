import React from "react";

import tshirtImage from "../../assets/tshirt.png";
import ProductAction from "../ProductAction";
import SellerInfo from "../SellerInfo";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra Garantida com a Mercado Livre</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">3 dias para a troca se não tiver utilizado e com a etiqueta</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
    <strong>Modelo Nº</strong>: 8472740 - Branco <br />
    <strong>Modelagem</strong>: Decote Careca, Manga Curta <br />
    <strong>Tipo Estampa</strong>: Sem Estampa <br />
    <strong>Marca</strong>: Insider Store <br />
    <strong>Cor</strong>: Branco <br />
    <strong>Coleção</strong>: Basicos <br />
    <strong>Material</strong>: Algodão <br />

      <br />
      <strong>POR QUE CRIAMOS</strong> <br />
      <br />
      - Protege contra o suor, absorve até 4x mais suor que uma camiseta de algodão <br />
      - Protege contra o odor, por evitar a proliferação de bactérias <br />
      - Altamente respirável, não esquenta o corpo <br />
      - Não foge de dentro da calça <br />
      - Se ajusta ao corpo sem comprimir <br />
      <br />

      <strong>TECIDO</strong> <br />
      <br />
      - Absorvente e respirável: retém o suor e o evapora rapidamente <br />
      - Anti bacteriano: evita proliferação de bactérias que causam o odor <br />
      - Tecnologia termodinâmica: ajuda na regulação da temperatura corporal <br />
      - Sustentável: demanda 4X menos água que uma camiseta de algodão para ser produzida <br />
      - Composição: 88% modal 12% elastano <br />
      <br />

      <strong>INFORMAÇÕES</strong> <br />
      <br />
      Malha de altíssima qualidade com toque macio, durabilidade e muito confortável. 
      Camiseta meia manga com gola redonda costurada com pesponto, deixando a peça com um ótimo visual e 
      acabamento. Possui costura reforçada de ombro a ombro e reforço de gola dando sustentação e caimento 
      perfeitos. Indicada para a venda da camiseta lisa e personalização em estamparia e bordados.
      Muito usada também para camisetas de promoção, eventos e uniformes.
    </p>
  </Description>
);

export default Product;
