const Button = ({ label, className, fullWidth = false }) => {
    return (
        <button className={`button ${ className } ${ fullWidth ? 'fullwidth' : '' }`} >
            {label}
        </button>
    );
};

export default Button;