import styled from "styled-components";


export const RoomWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints['2xl']};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px;
  min-height: 100vh;
`
