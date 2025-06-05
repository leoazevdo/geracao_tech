import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import styled from "styled-components";

const LogoContainer = styled.header`
  background-color: blueviolet;
  padding: 0 60px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center; /* Isso centraliza tudo inicialmente */
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
            {/* Logo à esquerda */}
            <Left>
                <h1 className="m-0 text-white">logo</h1>
            </Left>

            {/* Campo de busca centralizado */}
            <Center>
                <IconField iconPosition="left" className="w-30rem">
                    <InputIcon className="pi pi-search" />
                    <InputText placeholder="Search" className="w-full" />
                </IconField>
            </Center>

            {/* Futuro menu ou botão à direita (pode deixar vazio se quiser) */}
            <Right>
                {/* Aqui poderia entrar um botão de login, ícone, etc */}
            </Right>
        </LogoContainer>
    );
};

export default Logo;