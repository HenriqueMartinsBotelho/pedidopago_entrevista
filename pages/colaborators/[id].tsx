import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { Card, Cards } from "./styled_components";

const ColaboratorDetails = () => {
  const router = useRouter();
  return (
    <Box>
      <Box>Detalhes do colaborador</Box>
      <Box>
        <Box>Informações pessoais</Box>
        <Cards>
          <Card>
            <Box>
              <img src="https://picsum.photos/40/40" alt="" />
            </Box>
            <Box>
              <div>CPF</div>
              <div>111 222 333 44</div>
            </Box>
          </Card>
          <Card>
            <Box>
              <img src="https://picsum.photos/40/40" alt="" />
            </Box>
            <Box>
              <div>CPF</div>
              <div>111 222 333 44</div>
            </Box>
          </Card>
          <Card>
            <Box>
              <img src="https://picsum.photos/40/40" alt="" />
            </Box>
            <Box>
              <div>CPF</div>
              <div>111 222 333 44</div>
            </Box>
          </Card>
        </Cards>
      </Box>
      ColaboratorDetails{router.query.id}
    </Box>
  );
};

export default ColaboratorDetails;
