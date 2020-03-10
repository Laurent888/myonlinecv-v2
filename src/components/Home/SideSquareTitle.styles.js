import styled from "styled-components"

const SideSquareTitleWrapper = styled.div`
  width: 35rem;
  padding: 2rem;
  background-color: rgb(153, 72, 25);
  margin-left: ${props => (props.right ? "auto" : "none")};
  ${props =>
    props.right
      ? "clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 0%)"
      : "clip-path: polygon(100% 0, 100% 0%, 85% 98%, 0 99%, 0 0)"};

  h3 {
    color: ${props => props.theme.white};
    font-size: 2.5rem;
    ${props => (props.right ? "text-align: end;" : "text-align: start;")}
    text-transform: uppercase;
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    width: 28rem;

    h3 {
      font-size: 2rem;
    }
  }
`

export default SideSquareTitleWrapper
