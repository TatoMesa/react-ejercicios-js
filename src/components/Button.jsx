const Button = ({ 
  children,       // El texto o iconos que van dentro
  onClick,        // La función que se ejecuta al hacer clic
  variant = 'primary', // El estilo (primary, secondary, danger, etc.)
  type = 'button', // 'button' o 'submit' para formularios
  disabled = false 
}) => {

  // Definimos estilos básicos según la "variante"
  const styles = {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: 'bold',
    transition: '0.3s',
    margin: '5px',
    opacity: disabled ? 0.6 : 1,
    // Colores dinámicos
    backgroundColor: variant === 'primary' ? '#007bff' : 
                     variant === 'danger' ? '#dc3545' : 
                     variant === 'success' ? '#28a745' : '#6c757d',
    color: 'white',
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      style={styles}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;