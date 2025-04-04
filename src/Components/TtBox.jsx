export default function TtBox({ isLecturer, boxdata }) {
  return (
    <>
      {isLecturer ? (
        <div className="box-tt">
          <div className="sub" id="r1c1">
            {boxdata ? (
              <>
                {boxdata.branch} <br />
                {boxdata.subject_name}
              </>
            ) : (
              "Null"
            )}
          </div>
          <div className="ln" id="r2c1">
            {boxdata ? (
              <>
                {boxdata.division} <br />
                {boxdata.batch}
              </>
            ) : (
              "Null"
            )}
          </div>
        </div>
      ) : (
        <div className="box-tt">
          <div className="sub" id="r1c1">
            {boxdata ? boxdata.subject_name : "Null"}
          </div>
          <div className="ln" id="r2c1">
            {boxdata ? boxdata.teacher_name : "Null"}
          </div>
        </div>
      )}
    </>
  );
}
