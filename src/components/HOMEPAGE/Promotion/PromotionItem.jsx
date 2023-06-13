import styled from "styled-components";
import { mobile } from "../../../responsive";
import "./Promotion.css";
import React from 'react'
import { Link } from 'react-router-dom'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(65%);
  ${mobile({ height: "50vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    text-align: center;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

export default function PromotionItem({ item }) {
  return (
    <Container className="promote">
      <Image src={item.img} alt={item.title} />
      <Info className="isi">
        <Title>{item.title}</Title>
        <Link to={item.link}>
          <Button className="shop-button">SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};

