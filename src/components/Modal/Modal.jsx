import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { styled } from "styled-components";

const DialogContainer = styled.dialog`
  width: 400px;
  margin 10rem, auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  z-index: 100;
`;

export default function Modal({ children, open }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <DialogContainer ref={dialog}>{children}</DialogContainer>,
    document.getElementById("modal")
  );
}
