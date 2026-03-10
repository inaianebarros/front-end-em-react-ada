import * as S from "./styles";

interface ShowCartProps {
  showCart: boolean;
}

export const Cart: React.FC<ShowCartProps> = ({ showCart }) => {
  return (
    <>
      <S.Container showCart={showCart}>
        <S.Title>Carrinho</S.Title>
      </S.Container>
    </>
  );
};
