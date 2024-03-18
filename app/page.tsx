import CardFilm from "./Components/CardFilm/CardFilm";

export default function Home() {
  return (
    <main className="flex-auto">
      <section className="flex flex-wrap justify-center">
      <CardFilm title="Barbie" image="/barbie.jpg" link="https://youtu.be/8zIf0XvoL9Y?si=vZAmvJFN3_fguuAl" />

      <CardFilm title="Gladiador" image="/Gladiador.jpg" link="https://youtu.be/P5ieIbInFpg?si=tdSETjAIOBxrXmd1" />

      <CardFilm title="Aquaman" image="/Aquamen.jpg" link="https://youtu.be/yJnzCBt5j1M?si=GYfeq2M3NCUQyLR8" />

      <CardFilm title="Liga da Justiça" image="/LigaDaJustiça.jpg" link="https://youtu.be/BZUm2lpPoKM?si=e2KE-7GXvAXSk9Db" />

      <CardFilm title="Intervenção" image="/intervencao-poster-marcos-palmeira.webp" link="https://youtu.be/e7saRUu0jGQ?si=CvXfNvyn9_APWSKS" />

      </section>

      <section className="flex flex-wrap justify-center">
      <CardFilm title="Barbie" image="/barbie.jpg" link="https://youtu.be/8zIf0XvoL9Y?si=vZAmvJFN3_fguuAl" />

      <CardFilm title="Gladiador" image="/Gladiador.jpg" link="https://youtu.be/P5ieIbInFpg?si=tdSETjAIOBxrXmd1" />

      <CardFilm title="Aquaman" image="/Aquamen.jpg" link="https://youtu.be/yJnzCBt5j1M?si=GYfeq2M3NCUQyLR8" />

      <CardFilm title="Liga da Justiça" image="/LigaDaJustiça.jpg" link="https://youtu.be/BZUm2lpPoKM?si=e2KE-7GXvAXSk9Db" />

      <CardFilm title="Intervenção" image="/intervencao-poster-marcos-palmeira.webp" link="https://youtu.be/e7saRUu0jGQ?si=CvXfNvyn9_APWSKS" />
      </section>
    </main>
  );
}
