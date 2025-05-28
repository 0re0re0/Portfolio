import type { CollectionEntry } from 'astro:content';
import { Chips } from './Chips';
import './proyectCard.css';

type Props = {
  proyect: CollectionEntry<'projects'>;
};
export const ProyectCard = ({ proyect }: Props) => {
  const { title, summary, isInConstruction, tags } = proyect.data;
  const isIOS = tags.map((tag) => tag.toLowerCase()).includes('ios');

  return (
    <article className="proyect">
      <a className="proyect__link" href={`/info-proyects/${proyect.slug}`}>
        <header className="proyect__header">
          <h2 className="proyect__title" style={{ viewTransitionName: `${title}-title` }}>
            {isIOS ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(var(--color), 1)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="proyect__icon icon-offset lucide lucide-smartphone size-4"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="4" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(var(--color), 1)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="proyect__icon icon-offset lucide lucide-monitor size-4"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            )}
            {title}
          </h2>
        </header>
        <div className="proyect__content">
          {isInConstruction && <span className="building">En desarrollo</span>}
          <span className="smoke">{summary}</span>
          <Chips technologies={tags} />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon"
        >
          <line x1="5" y1="12" x2="19" y2="12" className="line"></line>
          <polyline points="12 5 19 12 12 19" className="arrow"></polyline>
        </svg>
      </a>
    </article>
  );
};
