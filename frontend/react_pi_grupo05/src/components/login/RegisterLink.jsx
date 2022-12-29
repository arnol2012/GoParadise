import { Link } from 'react-router-dom';

const RegisterLink = () => {
    return (
        <>
            <small>
                ¿Aún no tenes cuenta? <Link to="/register">Regístrate</Link>
            </small>
        </>
    );
};

export default RegisterLink;