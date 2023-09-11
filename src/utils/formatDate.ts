export default function formatDate(inputDateStr: string) {
  const inputDate = new Date(inputDateStr);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = inputDate.getDate();
  const monthIndex = inputDate.getMonth();
  const year = inputDate.getFullYear();
  const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

  return formattedDate;
}
