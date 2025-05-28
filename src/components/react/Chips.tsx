import './chips.css';
type Props = {
  technologies: string[];
};
export const Chips = ({ technologies }: Props) => {
  return (
    <ul className="chips">
      {technologies.map((tech, index) => (
        <li key={tech + index} className="chip">
          {tech}
        </li>
      ))}
    </ul>
  );
};
