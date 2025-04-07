export default function currentTime(timeSlote) {
  const now = new Date();

  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");

  const current = `${hours}:${minutes}`;

  // console.log("Current Time:", current);
  // console.log("Slot:", timeSlote.start, "-", timeSlote.end);

  return current >= timeSlote.start && current <= timeSlote.end;
}
