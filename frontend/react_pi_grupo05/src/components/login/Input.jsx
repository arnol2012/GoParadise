import { useRandomId } from "../../behaviour/hooks";

const Input = ({ label, type = 'text', fullWidth = false, className = '' }) => {
    const id = useRandomId();
    return (
        <div className={`input-wrapper ${fullWidth && 'fullwidth'}`} >
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                className={`${fullWidth && 'fullwidth'} ${className}`}
                autoComplete="false"
            />
        </div>
    );
};
  
export default Input;