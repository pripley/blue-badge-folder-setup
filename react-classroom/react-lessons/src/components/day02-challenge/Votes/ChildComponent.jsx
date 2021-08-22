function ChildComponent(props) {
  const phrase = props.phrase
    return (
    <div>
      <p>
        {props.votes.name} had a total vote count of {props.votes.count}. 
      </p>
    </div>
  );
}

export default ChildComponent;
