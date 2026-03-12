import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";

import { Product } from "../../data/products";
import { RootReducer } from "../../redux/root-reducer";
import { addProduct, removeProduct } from "../../redux/CarReducer/cart-slice";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer,
  );

  const dispatch = useDispatch();

  const isProductInCart = cart.some((item) => item.id === product.id);

  return (
    <S.Card>
      <S.ProductImage src={product.image} alt={product.description} />
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            ),
          )}
          ({` ${product.rating.rate}`})
        </S.Review>
        <S.Price>${product.price}</S.Price>
      </S.ReviewPriceContainer>
      {isProductInCart ? (
        <S.AddToCartButtonContainer>
          <S.RemoveFromCartButton
            onClick={() => dispatch(removeProduct(product))}
          >
            Remover do Carrinho
            <FiShoppingCart />
          </S.RemoveFromCartButton>
        </S.AddToCartButtonContainer>
      ) : (
        <S.AddToCartButtonContainer>
          <S.AddToCartButton onClick={() => dispatch(addProduct(product))}>
            Adicionar ao Carrinho
            <FiShoppingCart />
          </S.AddToCartButton>
        </S.AddToCartButtonContainer>
      )}
    </S.Card>
  );
};
