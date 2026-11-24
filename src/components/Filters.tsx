import "../styles/App.css";

type Props = {
  value: number;
};

function Filters( { value }: Props ) {

  return (
    <label htmlFor='slider'>Minimum Games Played: {value}</label>
  );
}

export default Filters;
