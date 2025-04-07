import "../Styles/image.css";

export default function Image({ url }) {
  let heading = "";
  if (url == "/Time-table-student/public/lunchtime.png")
    heading = "Its Lunch Time!";
  if (url == "/Time-table-student/public/lecturesOver.png")
    heading = "Seesions are Over";
  if (url == "/Time-table-student/public/Tea_break.png")
    heading = "Seesions Not started yet!";
  return (
    <>
      <div className="break-container">
        <h1>{heading}</h1>
        <img src={url} alt="" />
      </div>
    </>
  );
}
