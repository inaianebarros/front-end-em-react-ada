import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${({ showCart }) => (showCart ? "0" : "-350px")};
  width: 350px;
  height: 100vh;
  background-color: white;
  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
  transition: right 0.3s ease-in-out;
`;

export const Title = styled.h1``;

export const CartProductList = styled.ul`
  list-style: none;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CartProductItem = styled.li`
  /* display: flex;
  align-items: center;
  gap: 1rem; */
`;

export const Price = styled.strong``;

export const TotalPrice = styled.strong``;

export const RemoveFromCartButton = styled.button`
  background-color: transparent;
  border: none;
  color: red;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
`;
