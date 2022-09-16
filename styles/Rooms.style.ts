import styled from "styled-components";


export const RoomWrapper = styled.div`
  padding-top: 5rem; 
  max-width: ${({ theme }) => theme.breakpoints['2xl']};
  background-color: black;
  width: 100vw;
  height: calc( 100vh - 5rem );
`
