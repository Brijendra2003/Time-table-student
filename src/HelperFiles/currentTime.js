export default function currentTime(timeSlote) {
  const now = new Date();
  const hours = now.getHours(); // 0–23
  const minutes = now.getMinutes(); // 0–59
  const seconds = now.getSeconds(); // 0–59

  if (hours.length < 2) hours = `0:${hours}`;
  if (minutes.length < 2) minutes = `0:${minutes}`;

  const current = `${hours + ":" + minutes}`;
  // const current = "12:16";

  if (current >= timeSlote.start && current <= timeSlote.end) {
    return true;
  } else {
    return false;
  }
}
