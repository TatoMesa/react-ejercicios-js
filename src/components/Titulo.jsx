
const Titulo = ({ children, className = "" }) => {
  return (
    <h3
      className={`text-xl font-semibold mb-4 ${className}`}
    >
      {children}
    </h3>
  );
};

export default Titulo;