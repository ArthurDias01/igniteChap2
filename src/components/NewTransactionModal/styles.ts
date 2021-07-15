import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
h2{
  color: var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 2rem;
};
input{
  background: #e7e9ee;
  width: 100%;
  height: 4rem;
  padding: 0 1.5rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 400;
  &::placeholder{
    color: var(--text-body);
  };
  &+input{
    margin-top: 1rem;
  };
};
  button[type="submit"]{
    background: var(--green);
    color: #fff;
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.9);
    }
  }
`;
export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 1rem;

  img{
    width: 20px;
    height: 20px;
  }

  span{
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title)
  }
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D',
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive ?
    transparentize(0.9, colors[props.activeColor]) : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s ease-in-out;

    &:hover{
      border-color: ${darken(0.2, '#d7d7d7')};
    }
`
