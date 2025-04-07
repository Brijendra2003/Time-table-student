import "../Styles/image.css";

export default function Image({ url }) {
  let heading = "";
  if (url == "https://bakend.up.railway.app/assets/lunchtime.png")
    heading = "Its Lunch Time!";
  if (url == "https://bakend.up.railway.app/assets/lecturesOver.png")
    heading = "Seesions are Over";
  if (url == "https://bakend.up.railway.app/assets/Tea_break.png")
    heading = "Seesions Not started yet!";
  // console.log("image componnet");

  return (
    <>
      <div className="break-container">
        <h1>{heading}</h1>
        <img src={url} alt="" />
      </div>
    </>
  );
}
