import styled from "styled-components";


export const ChatRoomWrapper = styled.div`
  background: black;
  border: 1px solid gray;
  border-radius: 1rem 1rem 0 0;
  border-bottom: 0;
  position: fixed;
  display: flex;
  z-index: 999;
  flex-direction: column;
  right: 0;
  bottom: 0;
  max-width: min(500px, calc(100vw - 2rem));
  width: 100%;
  max-height: 500px;
  margin: 1rem;
  margin-bottom: 0;
  hr {
    width: 100%;
  }

  ${({theme}) => theme.query.MEDIA_QUERY_SM} {
    max-height: 300px;
  }
`

export const Title = styled.div`
  width: calc(100% - 1rem);
  display: inline-flex;
  padding: 0.5rem;
  vertical-align: middle;
  font-size: ${({ theme }) => theme.fonts.fontSizes['lg']};
  border-bottom: 1px solid gray;

  .maximize-icon {
    cursor: pointer;
    margin-left: auto;
    vertical-align: middle;
    font-size: 24px;
  }
`
interface ChatBodyInterface{
  open: boolean
}

export const ChatBody = styled.div<ChatBodyInterface>`
  flex-grow: 1;
  padding: 1rem;
  overflow: auto;
  display: ${({open}) => open? "block" : "none"};
`

interface MessageInterface{
  own: boolean
}

export const Message = styled.div<MessageInterface>`
  display: flex;
  flex-direction: ${({own})=> own ? "row-reverse" : "row"};
  justify-content: ${({own}) => own ? "end" : "start"};
  width: 100%;
  margin: 0.5rem 0;
  font-size: ${({ theme }) => theme.fonts.fontSizes['md']};
`
