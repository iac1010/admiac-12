
import React from 'react';
import Modal from './common/Modal';
import Calculator from './common/Calculator';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalculatorModal: React.FC<CalculatorModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Calculadora Rápida" size="sm">
      <Calculator />
    </Modal>
  );
};

export default CalculatorModal;
