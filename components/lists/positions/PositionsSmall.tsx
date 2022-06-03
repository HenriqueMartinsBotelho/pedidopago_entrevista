import { useState } from "react";
import { css } from "@emotion/react";

import {
  Container,
  Accordion,
  Item,
  Title,
  Main,
  NameTitle,
  Description,
  ContentShow,
  Cards,
  Card,
  CardTitle,
  CardContent,
  Btn,
  Symbol,
} from "./styled_components";

const PositionsSmallTable = ({ rows }) => {
  const [selected, setSelected] = useState(null);
  const [qtnPositions, setQtnPositions] = useState(6);

  const toogle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <Container>
      <Accordion>
        {rows.slice(0, qtnPositions).map((item, i) => (
          <Item key={item.id} onClick={() => toogle(i)}>
            <Title>
              <Main>
                <NameTitle>Cargo</NameTitle>
                <Description className="psc_depsc">{item.name}</Description>
              </Main>
              <Symbol>{selected === i ? "-" : "+"}</Symbol>
            </Title>
            <ContentShow s={selected === i}>
              <Cards>
                <Card>
                  <CardTitle>Cargo</CardTitle>
                  <CardContent>{item?.name}</CardContent>
                </Card>
                <Card>
                  <CardTitle>Departamento</CardTitle>
                  <CardContent>{item?.departament}</CardContent>
                </Card>
                <Card>
                  <CardTitle>Colaborador</CardTitle>
                  <CardContent>{item?.agents_quantity}</CardContent>
                </Card>
              </Cards>
            </ContentShow>
          </Item>
        ))}
        <Btn
          onClick={() => {
            setQtnPositions((range) => range + 5);
          }}
        >
          Carregar Mais
        </Btn>
      </Accordion>
    </Container>
  );
};

export default PositionsSmallTable;
