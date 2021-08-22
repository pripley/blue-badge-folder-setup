function PresidentChild(props) {
  let firstName = props.presidentsDead.first;
  let lastName = props.presidentsDead.last;
  let death = props.presidentsDead.passed;
  let birth = props.presidentsDead.year;
  let age = death - birth
  
  return (
    <div>
      <p>
        {firstName} {lastName} died at {age} 
      </p>
    </div>
  );
}

export default PresidentChild;
