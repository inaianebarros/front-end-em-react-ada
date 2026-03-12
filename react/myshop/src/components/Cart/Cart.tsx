import * as S from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { removeProduct } from "../../redux/CarReducer/cart-slice";

interface ShowCartProps {
  showCart: boolean;
}

export const Cart: React.FC<ShowCartProps> = ({ showCart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer,
  );
  const dispatch = useDispatch();

  return (
    <>
      <S.Container showCart={showCart}>
        <S.Title>Carrinho</S.Title>
        <S.CartProductList>
          {cart.map((product) => (
            <S.CartProductItem key={product.id}>
              <strong>{product.title}</strong> - ${product.price}
              <S.RemoveFromCartButton
                onClick={() => dispatch(removeProduct(product))}
              >
                Remover
              </S.RemoveFromCartButton>
              {/* <S.ProductImage src={product.image} alt={product.description} />
              <S.ProductTitle>{product.title}</S.ProductTitle>
              <S.Price>${product.price}</S.Price> */}
            </S.CartProductItem>
          ))}
        </S.CartProductList>
        <S.TotalPrice>
          Total: ${cart.reduce((acc, product) => acc + product.price, 0)}
        </S.TotalPrice>
      </S.Container>
    </>
  );
};
