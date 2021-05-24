import {useState } from 'react';
import Modal from 'react-modal';
import {Dashboard } from "./components/Dashboard";
import {Header} from "./components/Header"
import {NewTransacitionModal } from './components/NewTransacitionModal';
import {GlobalStyle } from './styles/global'
import {TransactionsProvider } from './hooks/useTransactionsContext';

Modal.setAppElement('#root');

export function App() {
    const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
    }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransacitionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle/>
    </TransactionsProvider>
  );
}