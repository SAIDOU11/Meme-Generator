import starFilled from '../assets/star-filled.png';
import starEmpty from '../assets/star-empty.png';

const Star = (props) => {
  console.log(props.isFilled);
  return (
    <img
      onClick={props.handleClick}
      src={props.isFilled ? starFilled : starEmpty}
      alt="star"
      className="card--favorite"
    />
  );
};

export default Star;
