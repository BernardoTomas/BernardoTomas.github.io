import "./Textcard.css";

function StacksLine(props: { stacks: string[] }) {
  const { stacks } = props;

  return (
    <div className="stacks-line">
      {stacks.map((stack, index) => (
        <div className="stack-logo" key={index}>
          <img src={stack} alt={stack} />
        </div>
      ))}
    </div>
  );
}

export default StacksLine;
