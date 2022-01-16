import numberToWords from "num-to-words-converter";

const formatNiceDate = (date) => {
  const monthsArr = [
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
  const niceDate =
    date.getDate() +
    "-" +
    monthsArr[date.getMonth()] +
    "-" +
    date.getFullYear();
  // console.log(niceDate);
  return niceDate;
};

const monthDiff = (d1, d2) => {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};

export { formatNiceDate, monthDiff, numberToWords };
