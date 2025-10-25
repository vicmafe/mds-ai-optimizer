import Image from "next/image";
import ImgCapaResultados from "@/lib/img/ImgCapaResultados.png";
import Link from "next/link";

export default function HomePage() {
  
  return (
    <main style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Link
        href="/campaigns"
      >
      <Image
        src={ImgCapaResultados}
        alt="Menos tempo em relatórios, mais resultado"
        layout="fill"
      />
      </Link>
    </main>
  );
}

