import type { CollectionEntry } from 'astro:content';
import { ProyectCard } from './ProyectCard';
import './proyects.css';

type Props = {
  initialProyects: CollectionEntry<'projects'>[];
};

export const Proyects = ({ initialProyects }: Props) => {
  const filteredProyects = initialProyects.filter(proyect => {
    const tagsLowerCase = (proyect.data.tags || []).map(tag => tag.toLowerCase());
    return tagsLowerCase.includes('ios');
  });

  return (
    <>
      <section>
        <div className="proyects__list">
          {filteredProyects.map(proyect => (
            <ProyectCard key={proyect.slug} proyect={proyect} />
          ))}
        </div>
      </section>
    </>
  );
};
