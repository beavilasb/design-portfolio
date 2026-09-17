import Link from "next/link";

export default function Projetos() {
  return (
    <div className="page-placeholder">
      <h1>Projetos</h1>
      <p>
        Listagem dos seus trabalhos e cases. Conteúdo placeholder até a
        integração do restante do design.
      </p>
      <p style={{ marginTop: "1.5rem" }}>
        <Link href="/projetos/design-system" style={{ fontWeight: 700 }}>
          Ver case: Design System from scratch →
        </Link>
      </p>
    </div>
  );
}
