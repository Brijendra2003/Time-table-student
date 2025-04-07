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
  const hours = now.getHours(); // 0–23
  const minutes = now.getMinutes(); // 0–59
  //
  if (hours.length < 2) hours = `0:${hours}`;
  if (minutes.length < 2) minutes = `0:${minutes}`;

  // const current = "00:41";

  const current = `${hours + ":" + minutes}`;

  if (current >= breaks[0].start && current <= breaks[0].end) {
    return "/Time-table-student/public/lunchtime.png";
  } else if (current >= breaks[1].start && current <= breaks[1].end) {
    return "/Time-table-student/public/lecturesOver.png";
  } else if (current >= breaks[2].start && current <= breaks[2].end) {
    return "/Time-table-student/public/Tea_break.png";
  } else {
    return false;
  }
}
