import { useCallback, useEffect, useState } from "react";
import { initialData } from "./data";
import { calculatePercent } from "./helpers/calculatePercent";
import { randomValues } from "./helpers/randomValues";
import { Container } from "./components/Container";
import { Button } from "./components/Button";
import { NameList } from "./components/NameList";
import { TimeList } from "./components/TimeList";

function App() {
  const [times, setTimes] = useState<number[] | []>([]);
  const [names, setNames] = useState<string[] | []>([]);
  const [percents, setPercents] = useState<number[] | []>([]);
  const [isChanging, setIsChanging] = useState<boolean>(false);

  useEffect(() => {
    setNames(initialData.map((item) => item.name));
    setTimes(initialData.map((item) => item.time));
  }, []);

  function handleChangeValues() {
    setTimes(randomValues(times));
  }
  useEffect(
    useCallback(() => {
      if (isChanging) {
        let intervalId = setInterval(handleChangeValues, 31800);
        return () => clearInterval(intervalId);
      }
    }, [isChanging]),
    [isChanging]
  );
  useEffect(
    useCallback(() => {
      const calculate = calculatePercent(times);
      setPercents(calculate);
    }, [times]),
    [times]
  );
  return (
    <Container>
      <h1>Spent time (seconds)</h1>
      <Container className="container">
        <Container className="btn-container">
          <Button
            textContent="Change values"
            disabled={isChanging}
            onClick={() => {
              handleChangeValues();
              setIsChanging(true);
            }}
          />
          {isChanging && (
            <Button textContent="Stop" onClick={() => setIsChanging(false)} />
          )}
        </Container>
        <Container className="main-content-container">
          <NameList names={names} />
          <TimeList times={times} percents={percents} />
        </Container>
      </Container>
    </Container>
  );
}

export default App;
