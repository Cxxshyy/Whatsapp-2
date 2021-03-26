import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Head>
        <title>Login Page</title>
      </Head>
      <LoginContainer>
        <Logo src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" />
      </LoginContainer>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;
const Head = styled.div``;
const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
