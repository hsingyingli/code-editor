import styled from "styled-components";

export const LayoutWrapper = styled.main`

`


export const Container = styled.div`
  max-width: ${ ({theme}) => theme.breakpoints['2xl'] };
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`
