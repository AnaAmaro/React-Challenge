import React, { useState } from "react";
import WellcomeTest from ".";
import Modal from "react-bootstrap/Modal";

export default function ModalReact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <main>
        <h1>Bienvenido a este React Challenge</h1>
        <p>
          ¿Os atrevéis a hacer este divertido reto? Antes de continuar tendréis
          que superar este sencillo test. Pulsa en el botón para acceder.
        </p>
        <button onClick={handleShow} type="button">
          Test
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <WellcomeTest></WellcomeTest>
        </Modal>
      </main>
    </>
  );
}
