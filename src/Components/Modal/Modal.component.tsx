import React from "react";

import { Container, Content } from "./Modal.styles";
interface ModalProps {
  open: boolean;
  handleClose(): void;
}
export const Modal: React.FC<ModalProps> = ({
  handleClose,
  open,
  children,
}) => {
  return open ? (
    <Container>
      <Content>{children}</Content>
    </Container>
  ) : (
    <div></div>
  );
};
