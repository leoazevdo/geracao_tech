
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#000', color: '#fff', padding: '2rem' , fontFamily: 'Inter, sans-serif' }}>
            <div class="gap-8 flex-initial flex align-items-start justify-content-center bg-primary  m-2 px-2 py-2 border-round">

                {/* Coluna 1 - Logo, Descrição e Redes Sociais */}
                <div className="p-col" style={{ textAlign: 'left' }}>
                    <img src="./assets/logo-footer.svg" alt="Logo da Loja" style={{ width: '100px', marginBottom: '0rem' }} />
                    <p style={{ marginBottom: '1rem', lineHeight: '1.5' }}>
                        Somos uma loja dedicada a oferecer os<br/>
                        melhores produtos com qualidade e confiança.
                    </p>
                    <div className="p-d-flex p-jc-center">
                        <Button icon="pi pi-facebook" className="p-button-rounded p-button-text p-button-sm p-mr-2" />
                        <Button icon="pi pi-instagram" className="p-button-rounded p-button-text p-button-sm p-mr-2" />
                        <Button icon="pi pi-twitter" className="p-button-rounded p-button-text p-button-sm" />
                    </div>
                </div>

                {/* Coluna 2 */}
                <div className="p-col" style={{textAlign: 'left'}}>
                    <h3 className="p-mb-1" style={{textAlign: 'left'}}>Informações</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li className="mb-2"><Link to="/sobre" style={{ color: '#fff', textDecoration: 'none' }}>Sobre a Loja</Link></li>
                        <li className="mb-2"><Link to="/blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</Link></li>
                        <li className="mb-2"><Link to="/trabalhe-conosco" style={{ color: '#fff', textDecoration: 'none' }}>Trabalhe Conosco</Link></li>
                        <li className="mb-2"><Link to="/meus-pedidos" style={{ color: '#fff', textDecoration: 'none' }}>Meus Pedidos</Link></li>
                    </ul>
                </div>

                {/* Coluna 3 */}
                <div className="p-col-12 p-md-3" style={{textAlign: 'left' }}>
                    <h3 className="p-mb-1">Atendimento</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li><Link to="/contato" style={{ color: '#fff', textDecoration: 'none' }}>Fale Conosco</Link></li>
                        <li><Link to="/faq" style={{ color: '#fff', textDecoration: 'none' }}>Perguntas Frequentes</Link></li>
                        <li><Link to="/suporte" style={{ color: '#fff', textDecoration: 'none' }}>Suporte</Link></li>
                    </ul>
                </div>

                {/* Coluna 4 */}
                <div className="p-col-12 p-md-3" style={{ textAlign: 'left' }}>
                    <h3 className="p-mb-1">Minha Conta</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li><Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link></li>
                        <li><Link to="/cadastrar" style={{ color: '#fff', textDecoration: 'none' }}>Cadastrar</Link></li>
                        <li><Link to="/meus-pedidos" style={{ color: '#fff', textDecoration: 'none' }}>Meus Pedidos</Link></li>
                    </ul>
                </div>
            </div>

            <Divider style={{ backgroundColor: '#fff' }} />

            <div style={{ textAlign: 'center', fontSize: '0.9rem', marginTop: '1rem' }}>
                &copy; 2025 Sua Loja. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;
