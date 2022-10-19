import { dateToMonthArray } from "../lib/calendar";

function Calendar({ events }) {
  events = JSON.parse(events);
  let dateArr = dateToMonthArray(new Date());
  return (
    <div className="grid grid-cols-7 h-screen text-sm">
      {dateArr.map((day, i) => (
        <div
          key={i}
          className={`flex flex-col p-[2px] ${
            day
              ? "border border-indigo-100 hover:bg-indigo-100 duration-100"
              : ""
          }`}
        >
          <div className="text-end text-indigo-700 font-bold">
            {day?.getDate()}
          </div>
          {day && (
            <div className="grow basis-1 max-h-10 text-center overflow-hidden">
              {
                events.find((e) => new Date(e.date).getTime() === day.getTime())
                  ?.event
              }
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
