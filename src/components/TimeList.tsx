import { v4 as uuid } from "uuid";

interface ITimeListProps {
  times: number[];
  percents: number[];
}

export function TimeList({ times, percents }: ITimeListProps) {
  let counter = 0;
  return (
    <div className="stats-container">
      <ul>
        {times.map((time, index) => {
          if (index) counter += percents[index - 1];
          return (
            <li key={uuid()} className="stats-item">
              <div
                className="inner-margin-container"
                style={{ width: `${counter}%` }}
              ></div>
              <div
                className="color-line"
                style={{
                  width: `${percents[index]}%`,
                }}
              >
                <p>{time}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
