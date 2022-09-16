import styled from "styled-components";

export const InputField = styled.div`
  label {
    display: block;
    text-transform: uppercase;
    text-align: center;
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
    box-sizing: border-box;
    -moz-box-sizing: border-box;

    border-color: ${({ theme }) => theme.colors.teal['400']};

    :hover {
      border-color: ${({ theme }) => theme.colors.teal['600']};
    }
  }



  input {
    visibility: hidden;
    position: absolute;
  }
`

export const ImageWrapper = styled.div`
  display: block;
  overflow: hidden;
  max-width: 250px;
  max-height: 250px;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;

  #avatar-img {
    border-radius: 10px;
  }
`


