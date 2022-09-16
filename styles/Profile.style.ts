import styled from 'styled-components'


export const ProfileWrapper = styled.div`
  display: flex;
  padding-top: 5rem; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc( 100vh - 5rem );
  background-color: black;
`


export const ProfileField = styled.div`
  width: ${({ theme }) => theme.sizes.sm};
  margin:1rem;
  padding: 1rem;
  max-width: 90%;

  ${({theme}) => theme.query.MEDIA_QUERY_SM} {
    width: ${({ theme }) => theme.sizes.xs};

  }

`

export const InputField = styled.div`
  label {
    display: block;
    margin: 5px 0;
    font-size: ${({theme}) => theme.fonts.fontSizes['sm']};
    text-transform: uppercase;
  }

  input {
    width: 100%;
    border-radius: 5px;
    padding: 8px;
    font-size: 0.9rem;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  input[disabled] {
  color: #666;
}
`

export const Button = styled.button`
  display: block;
  padding: 8px;
  color: white;
  font-size: ${({ theme }) => theme.fonts.fontSizes.md};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: 100%;
  border-radius: 5px;
  border: 2px solid;
  background: none;
  margin: 1rem auto;

  border-color: ${({ theme }) => theme.colors.teal['400']};

  :hover {
    border-color: ${({ theme }) => theme.colors.teal['600']};
  }
  ;
`
