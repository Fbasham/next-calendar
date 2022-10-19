import { dateToMonthArray } from "../lib/calendar";

function Calendar() {
  let dateArr = dateToMonthArray(new Date());
  return (
    <div className="grid grid-cols-7 h-screen text-sm">
      {dateArr.map((day, i) => (
        <div
          key={i}
          className={`flex flex-col p-[2px] ${
            day ? "border border-indigo-100" : ""
          }`}
        >
          <div className="text-end text-indigo-700 font-bold">{day}</div>
          {day && <div className="h-full text-center">todo</div>}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
