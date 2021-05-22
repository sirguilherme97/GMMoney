import Modal from 'react-modal'

interface NewTransacitionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
} 

export function NewTransacitionModal({isOpen,onRequestClose}: NewTransacitionModalProps){
    return (
        <>
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}>
              <h1>Cadastrar Transação</h1>
        </Modal> 
        </>
    )
}