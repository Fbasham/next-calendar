import { dateToMonthArray } from "../lib/calendar";

function Calendar() {
  let dateArr = dateToMonthArray(new Date());
  console.log(dateArr);
  return (
    <div className="grid grid-cols-7">
      {dateArr.map((day, i) => (
        <div key={i} className={`text-sm h-20 ${day ? "border" : ""}`}>
          {day}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
