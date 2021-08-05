function Box(props) {
  const { text, className } = props;
  return{
      <div className={`box ${className}`}>
          <p className="text">{text}</p>
      </div>
  }
}

const element = (
  <div className="background-container">
    <h1 className="title">Boxes</h1>
    <div className="box-container">
      <Box text="Small" className="small-box" />
      <Box text="Medium" className="medium-box" />
      <Box text="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
