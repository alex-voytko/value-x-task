interface INameListProps {
  names: string[];
}

export function NameList({ names }: INameListProps) {
  return (
    <ul className="names-list">
      {names.map((name) => (
        <li key={name}>
          <div>
            <p>{name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
