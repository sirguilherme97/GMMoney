import React from 'react'
import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox} from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react'
import { FormEvent } from 'react'
import { api } from '../../services/api'

interface NewTransacitionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
} 

export function NewTransacitionModal({isOpen,onRequestClose}: NewTransacitionModalProps){
    const [title,setTitle] = useState('');
    const [value,setValue] = useState(0);
    const [category,setCategory] = useState('');

    const [type,setType] = useState('deposit');

    function handleCreateNewTransacition(event:FormEvent){
        event.preventDefault();

        const data = {
            title,
            value,
            category,
            type
        };

        api.post('/transactions',data)

    }

    return (
        <>
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal"/>
            </button>

            <Container onSubmit={handleCreateNewTransacition}>
                <h2>Cadastrar Transação</h2>   
                <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)}/>
                <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))}/>
                <TransactionTypeContainer>
                    <RadioBox 
                    type="button" 
                    isActive={type === 'deposit'}
                    activeColor="green"
                    onClick={()=>{setType('deposit')}}>
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                    type="button"
                    isActive={type === 'withdraw'}
                    activeColor="red"
                    onClick={()=>{setType('withdraw')}}>
                        <img src={outcomeImg} alt="Saída"/>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>
                <button type="submit">Cadastrar</button>
            </Container>
                 
        </Modal> 
        </>
    )
}
