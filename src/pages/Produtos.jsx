import { Link } from "react-router-dom";

const Produtos = () => {
    return (
        <>
            <h2>produtos</h2>
            <ul>
                <li><Link to={"/produto/1/laranja"}>Laranja</Link></li>
                <li><Link to={"/produto/2/pera"}>pera</Link></li>
            </ul>

        </>
    );
}

export default Produtos;