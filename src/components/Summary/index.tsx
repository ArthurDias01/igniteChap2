import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saidas.svg';
import totalImg from '../../assets/Total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((accumulator, transaction) => {
    if (transaction.type === 'deposit') {
      accumulator.deposits += transaction.amount;
      accumulator.total += transaction.amount;
    } else {
      accumulator.withdraw += transaction.amount;
      accumulator.total -= transaction.amount;
    }
    return accumulator;
  }, {
    deposits: 0,
    withdraw: 0,
    total: 0,
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>-{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(summary.withdraw)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(summary.total)}</strong>
      </div>
    </Container>
  )
}
