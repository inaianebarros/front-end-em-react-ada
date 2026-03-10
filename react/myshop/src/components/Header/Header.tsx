import * as S from "./styles";
import { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";

export const Header: React.FC = () => {
  const [ShowCart, setShowCart] = useState(false);
  const logged = true;

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>
        <S.ButtonWrapper>
          <S.AuthButton islogged={logged}>
            {logged ? "Logout" : "Login"}
            {logged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton onClick={() => setShowCart(!ShowCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonWrapper>
      </S.Wrapper>
      <Cart showCart={ShowCart} />
    </S.StyledHeader>
  );
};
