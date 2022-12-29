import { useState } from "react";
import Input from "./Input";

const Password = () => {
    const [type, setType] = useState('password');

    const toogleType = () => setType(type === 'password' ? 'text' : 'password');

    return (
        <>
            <Input
                label="Contraseña"
                type={type}
                fullWidth
            />
            <div className="password-viewer" onClick={toogleType}></div>
        </>
    );
};

export default Password;