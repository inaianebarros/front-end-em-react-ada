import * as S from "./styles";
import { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/UserReducer/user-slice";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer,
  );

  const dispatch = useDispatch();

  const [ShowCart, setShowCart] = useState(false);
  const logged = !!user;

  function handleUserAuth() {
    //usuario nao logado
    if (user === null) {
      //login
      dispatch(
        login({
          name: "Inaiane",
          email: "inaiane@example.com",
        }),
      );
    } else {
      //logout
      dispatch(logout({}));
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>
        <S.ButtonWrapper>
          <S.AuthButton islogged={logged} onClick={handleUserAuth}>
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
