function BmiScore({ bminum, bmiName, changeWeight }) {
  //   const { bminum, bmiName } = props;
  return (
    <div className="text-center shadow rounded p-4">
      <div>Your BMI Score</div>
      <div className="row justify-content-md-center">
        <div
          className={
            18.5 <= bminum && bminum <= 24.9
              ? "text text-success p-3 my-2 alert fs-1 alert-primary col-sm-4"
              : bminum <= 18.5 || (25 <= bminum && bminum <= 35)
              ? "text text-warning p-3 my-2 alert fs-1 alert-primary col-sm-4"
              : bminum >= 36
              ? "text text-danger p-3 my-2 alert fs-1 alert-primary col-sm-4"
              : "p-3 my-2 alert fs-1 alert-primary col-sm-4"
          }
        >
          {bminum}
        </div>
      </div>
      <div
        className={
          18.5 <= bminum && bminum <= 24.9
            ? "text text-success fs-3 fw-bold text-primary"
            : bminum <= 18.5 || (25 <= bminum && bminum <= 35)
            ? "text text-warning fs-3 fw-bold text-primary"
            : bminum >= 36
            ? "text text-danger fs-3 fw-bold text-primary"
            : "fs-3 fw-bold text-primary"
        }
      >
        {bmiName}
      </div>
      {changeWeight.type === "positive" && (
        <div className="fs-4">
          "You need to lose
          <span className="fw-bold">{changeWeight.weight} kg" </span>
        </div>
      )}
      {changeWeight.type === "negative" && (
        <div className="fs-4">
          "You need to gain
          <span className="fw-bold">{changeWeight.weight} kg" </span>
        </div>
      )}
      {changeWeight.type === "normal" && (
        <div className="fs-4">
          <span className="fw-bold">"Your weight is Normal,Good for you"</span>
        </div>
      )}
    </div>
  );
}

export default BmiScore;
