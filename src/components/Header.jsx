import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from 'primereact/button';



const LogoContainer = styled.header`
  background-color: #ffffff;
  padding: 0 60px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 80px;
  font-family: Arial, Helvetica, sans-serif;
`;





const Left = styled.div`
  position: absolute;
  left: 70px;
  & img {
    padding: 10px;
    padding-left: 30px;
    width: 120px;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  padding-right: 9%;

`;

const Right = styled.div`
  position: absolute;
  right: 60px;
  & img {
    padding: 10px;
    padding-left: 30px;
  }
`; 

const HeaderContainer = styled.header`
  background-color: #ffffff;
  padding: 0 60px;
  margin: 0%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  
  & nav ul {
    display: flex;
    gap: 36px;
    padding:20px 40px ;
    list-style: none;
    font-family:  'Inter', sans-serif;
    & li a{
        text-decoration: none;
        color: #474747
        font-size: 11px;
        &:hover, &.active {
        color:#474747
      
        }
        
        
    }
  }
`;



const Header = () => {
  return (

    <>


      <LogoContainer>

        <Left>
          <img src="./assets/logo-header.svg" alt="" />
        </Left>


        <Center>
          <IconField iconPosition="left" className="w-30rem">
            <InputIcon className="pi pi-search" />
            <InputText placeholder="Search" className="w-full" />
          </IconField>
        </Center>


        <Right>

          <Button label="Entrar" link onClick={() => window.open('https://react.dev', '_blank')} />
          <Button label="Cadastre-se" raised />
          <img src="./assets/mini-cart.svg" alt="" />




        </Right>
      </LogoContainer>

      <HeaderContainer>


        <nav>
          <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/produtos"}>Produtos</NavLink></li>
            <li><NavLink to={"*"}>Categorias  </NavLink></li>
            <li><NavLink to={"*"}>Meus Pedidos</NavLink></li>
          </ul>
        </nav>

      </HeaderContainer>

    </>
  );
};



export default Header;