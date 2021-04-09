type DempProps = {
  id: number;
  punchline: string;
  setup: string;
  type: string;
  fetchAPI: () => void;
};
// type DempProps = {
//   message: string;
//   type: string;
// };

function Demo (props: DempProps) {
  return (
    <div>
     <p>
        {`${props.setup} ${props.punchline}`}
    </p>
    <button className="button1" onClick={props.fetchAPI}>Next &gt;</button>
    </div>
  );
}

export default Demo;
