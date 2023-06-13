import React, { useEffect } from 'react'
import styled from "styled-components";
import PromotionData from "./PromotionData";
import { mobile } from "../../../responsive";
import PromotionItem from "./PromotionItem";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

export default function Categories() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      {PromotionData.map((item) => (
        <PromotionItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

