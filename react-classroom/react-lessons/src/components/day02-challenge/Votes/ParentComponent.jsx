import ChildComponent from "./ChildComponent";

function ParentComponent(props) {
  const votes = [
    { name: "Abe Lincoln", count: 139033 },
    { name: "Stephen Douglas", count: 115509 },
  ];
  const phrase = props.phrase;
  return (
    <div>
      {votes.map((vote) => (
        <ChildComponent votes={vote} phrase={phrase} />
      ))}
    </div>
  );
}

export default ParentComponent;
