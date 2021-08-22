import PresidentChild from "./PresidentChild";
import { presidentsArray } from "./presidents.constant";

function PresidentParent() {
  const presidents = presidentsArray;
  //   const presidentsAlive = presidents.filter(prez => prez.passed === undefined)
  const presidentsDead = presidents.filter((prez) => prez.passed !== undefined);
  console.log(presidentsDead);
  return (
    <div>
      {/* <h1>Bronze</h1>
      {presidents.map((prez) => (
        <PresidentChild presidents={prez} /> 
      ))} */}

      {/* <h2>Silver</h2>
      {presidentsAlive.map((prez, index) => (
        <PresidentChild key={index} presidentsAlive={prez}  />
      ))} */}

      <h2>Gold</h2>
      {presidentsDead.map((prez, index) => (
        <PresidentChild key={index} presidentsDead={prez} />
      ))}
    </div>
  );
}

export default PresidentParent;
