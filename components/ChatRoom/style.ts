import styled from "styled-components";


export const ChatRoomWrapper = styled.div`
  grid-column: 6 / 8;
  background-color: red;

  ${({theme}) => theme.query.MEDIA_QUERY_LG} {
    grid-column: 2 / 8;
  }

`
