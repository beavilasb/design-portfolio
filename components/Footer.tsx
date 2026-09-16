export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      © {year} Seu Nome. Todos os direitos reservados.
    </footer>
  );
}
