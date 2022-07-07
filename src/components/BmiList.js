function BmiList({ range, bmi }) {
  console.log(range);
  return (
    <div className="text-center shadow-sm rounded">
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-4 fw-bold">Type</div>
            <div className="col-4 fw-bold">BMI</div>
            <div className="col-4 fw-bold">Weight</div>
          </div>
        </li>
        <li
          className={
            bmi <= 18.5
              ? "border border-warning border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 fw-bold">Uder Weight</div>
            <div className="col-4 fw-bold">&lt;18.5</div>
            <div className="col-4 fw-bold">&lt;{range.underWeight.low}kg</div>
          </div>
        </li>
        <li
          className={
            18.5 <= bmi && bmi <= 24.9
              ? "border border-success border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 fw-bold">Normal</div>
            <div className="col-4 fw-bold">18.5-24.9</div>
            <div className="col-4 fw-bold">
              {range.normal.low + "kg -" + range.normal.high + "kg "}
            </div>
          </div>
        </li>
        <li
          className={
            25 <= bmi && bmi <= 29.9
              ? "border border-warning border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 fw-bold">over Weight</div>
            <div className="col-4 fw-bold">25-29.9</div>
            <div className="col-4 fw-bold">
              {range.overWeight.low + "kg -" + range.overWeight.high + "kg "}
            </div>
          </div>
        </li>
        <li
          className={
            30 <= bmi && bmi <= 34.9
              ? "border border-warning border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 fw-bold">Obesity Class I</div>
            <div className="col-4 fw-bold">30-34.9</div>
            <div className="col-4 fw-bold">
              {range.obesityOne.low + "kg -" + range.obesityOne.high + "kg "}
            </div>
          </div>
        </li>
        <li
          className={
            35 <= bmi && bmi <= 39.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 fw-bold">Obesity Class II</div>
            <div className="col-4 fw-bold">35-39.9</div>
            <div className="col-4 fw-bold">
              {range.obesityTwo.low + "kg -" + range.obesityTwo.high + "kg "}
            </div>
          </div>
        </li>
        <li
          className={
            40 <= bmi
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 fw-bold">Obesity Class III</div>
            <div className="col-4 fw-bold">&gt;40</div>
            <div className="col-4 fw-bold">&gt;{range.obesityThree.high}kg</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default BmiList;
