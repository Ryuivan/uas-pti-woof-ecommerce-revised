import styled from 'styled-components';

const Progress = styled.div `
  position: fixed;
  background: linear-gradient(
    to right,
    #fdc500 ${props => props.scroll},
    transparent  0);
  width: 100%;
  height: 6px;
  z-index: 3;
`;

export default Progress;