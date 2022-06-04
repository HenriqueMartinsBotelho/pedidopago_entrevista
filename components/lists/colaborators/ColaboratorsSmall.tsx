import { useState } from "react";
import {
  Avatar,
  Accordion,
  Item,
  Title,
  Main,
  NameTitle,
  Description,
  Name,
  Cards,
  Card,
  CardTitle,
  CardDesc,
  BtnAction,
  BtnLoad,
  ContentShow,
} from "./styled_components";

export const ColaboratorsSmall = ({ rows }) => {
  const [selected, setSelected] = useState(null);
  const [qtnColaborators, setQtnColaborators] = useState(6);

  const toogle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <Accordion>
      {rows.slice(0, qtnColaborators).map((item, i) => (
        <Item key={item.id} onClick={() => toogle(i)}>
          <Title>
            <Main>
              <NameTitle>Nome Completo</NameTitle>
              <Description>
                <Avatar src="https://picsum.photos/200" />
                <Name>{item.name}</Name>
              </Description>
            </Main>
            <span>{selected === i ? "-" : "+"}</span>
          </Title>
          <ContentShow isSelected={selected === i}>
            <Cards>
              <Card>
                <CardTitle>Departamento</CardTitle>
                <CardDesc>{item.department}</CardDesc>
              </Card>
              <Card>
                <CardTitle>Cargo</CardTitle>
                <CardDesc>{item.role}</CardDesc>
              </Card>
              <Card>
                <CardTitle>Unidade</CardTitle>
                <CardDesc>{item.agent_id}</CardDesc>
              </Card>
              <Card>
                <CardTitle>Unidade</CardTitle>
                <CardDesc>{item.branch}</CardDesc>
              </Card>
              <Card>
                <CardTitle>Status</CardTitle>
                <CardDesc>{item.status}</CardDesc>
              </Card>
            </Cards>
            <BtnAction>Ações</BtnAction>
          </ContentShow>
        </Item>
      ))}
      <BtnLoad
        onClick={() => {
          setQtnColaborators((range) => range + 5);
        }}
      >
        Carregar Mais
      </BtnLoad>
    </Accordion>
  );
};
