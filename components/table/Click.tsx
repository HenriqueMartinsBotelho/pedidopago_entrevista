import { useState } from "react";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { SxProps } from "@mui/system";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Link from "next/link";

export default function Click({ colaboratorID }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles: SxProps = {
    position: "absolute",
    top: 28,
    // right: 0,
    left: -280,
    zIndex: 10,
    p: 1,
    bgcolor: "background.paper",
    width: "300px",
    boxShadow: "0px 8px 24px rgba(165, 171, 179, 0.4)",
    borderRadius: "8px",
    textAlign: "left",
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: "relative" }}>
        <BiDotsVerticalRounded fontSize="24px" onClick={handleClick} />
        {open ? (
          <Box sx={styles}>
            <Box>
              <Link href={`/colaborators/${colaboratorID}`}>
                Ver colaborador
              </Link>
            </Box>
            <Box>Excluir</Box>
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
