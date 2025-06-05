import styled from "styled-components";
const FooterContainer = styled.footer`
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: blueviolet;
        padding: 10px 10px;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        
        & label {
           display: block;
           margin-bottom: 5px;
           color: aliceblue;
           
        }
        

`;

const Footer = () => {
    return (
        <>
            <FooterContainer>
                
                <label for="texto"> Escreva-se na nossa NewsLetteer</label>
                <input
                 type='text' 
                 name='email' 
                 id='email' 
                 placeholder='email@email.com'
                 />
                <button>Enviar</button>
                
            </FooterContainer>
        </>
    );
}

export default Footer;