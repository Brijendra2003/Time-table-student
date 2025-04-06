export default function HomeCard({ datas, student }) {
  // console.log("ecture", datas);

  return (
    <>
      {student ? (
        <div className="home-card">
          {datas && (
            <>
              <div className="home-card-left">
                <strong>Time</strong> <p>{datas.lecture_time}</p>
              </div>
              <div className="home-card-right">
                <div>
                  <strong>Lecturer: </strong> <p>{datas.teacher_name}</p>
                </div>
                <div>
                  <strong>Subject: </strong> <p>{datas.subject_name}</p>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="home-card">
          {datas && (
            <>
              <div className="home-card-left">
                <strong>Time</strong> <p>{datas.lecture_time}</p>
              </div>
              <div className="home-card-right-lecturer">
                <div>
                  <strong>Branch: </strong> <p>{datas.branch}</p>
                </div>
                <div>
                  <strong>Sem: </strong> <p>{datas.semester}</p>
                  <strong>Div: </strong> <p>{datas.division}</p>
                </div>
                <div>
                  <strong>Batch: </strong> <p>{datas.batch}</p>
                  <strong>Sub: </strong> <p>{datas.subject_name}</p>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
