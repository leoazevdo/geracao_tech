import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import styled from "styled-components";
import { Button } from 'primereact/button';

const LogoContainer = styled.header`
  background-color: blueviolet;
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
  left: 60px;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  position: absolute;
  right: 60px;
 
`;

const Logo = () => {
  return (
    <LogoContainer>

      <Left>
        <h1 className="m-0 text-white">DripStore</h1>
      </Left>


      <Center>
        <IconField iconPosition="left" className="w-30rem">
          <InputIcon className="pi pi-search" />
          <InputText placeholder="Search" className="w-full" />
        </IconField>
      </Center>

      
      <Right>
        
         <Button label="Entrar" link onClick={() =>  window.open('https://react.dev', '_blank')}/>
         <Button label="Cadastre-se"  raised />
        

      </Right>
    </LogoContainer>
  );
};

export default Logo;