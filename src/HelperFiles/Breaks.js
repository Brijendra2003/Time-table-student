export default function Breaks() {
  const breaks = [
    {
      start: "12:15",
      end: "13:00",
    },
    {
      start: "16:40",
      end: "23:59",
    },
    {
      start: "00:01",
      end: "09:29",
    },
  ];

  const now = new Date();

  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");

  const current = `${hours}:${minutes}`;

  if (current >= breaks[0].start && current <= breaks[0].end) {
    return "https://bakend.up.railway.app/assets/lunchtime.png";
  } else if (current >= breaks[1].start && current <= breaks[1].end) {
    return "https://bakend.up.railway.app/assets/lecturesOver.png";
  } else if (current >= breaks[2].start && current <= breaks[2].end) {
    return "https://bakend.up.railway.app/assets/Tea_break.png";
  } else {
    return false;
  }
}
