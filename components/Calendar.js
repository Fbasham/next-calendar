import { useState } from "react";
import { dateToMonthArray } from "../lib/calendar";

function Calendar({ events }) {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(0);

  if (!Array.isArray(events)) events = JSON.parse(events);
  let dateArr = dateToMonthArray(date);

  function handleViewClick(e) {
    if (e.target.value != view) setView(view ^ 1);
  }

  function handleChangeMonth(k) {
    let newDate = new Date(date);
    newDate.setMonth(date.getMonth() + k);
    setDate(newDate);
  }
  return (
    <>
      <div className="flex gap-1 text-sm items-baseline text-indigo-900 mb-2">
        <button
          className="border border-indigo-500 hover:bg-indigo-800 hover:text-white rounded px-1"
          onClick={() => handleChangeMonth(-1)}
        >
          PREV
        </button>
        <button
          className="border border-indigo-500 hover:bg-indigo-800 hover:text-white rounded px-1 mr-2"
          onClick={() => handleChangeMonth(1)}
        >
          NEXT
        </button>
        <span className="text-lg font-bold">
          {date.toUTCString().slice(8, 16)}
        </span>
        <button
          value={0}
          className={`border border-indigo-500 hover:bg-indigo-800 hover:text-white rounded px-1 ml-auto ${
            view == 0 ? "bg-indigo-700 text-white" : ""
          }`}
          onClick={handleViewClick}
        >
          CALENDAR
        </button>
        <button
          value={1}
          className={`border border-indigo-500 hover:bg-indigo-800 hover:text-white rounded px-1 ${
            view == 1 ? "bg-indigo-700 text-white" : ""
          }`}
          onClick={handleViewClick}
        >
          LIST
        </button>
      </div>
      <div
        className={`grid grid-cols-7 border-t border-l font-bold text-sm text-indigo-900 bg-indigo-50 ${
          view == 1 ? "hidden" : ""
        }`}
      >
        <div className="py-1 pl-2 border-r border-b">SUN</div>
        <div className="py-1 pl-2 border-r border-b">MON</div>
        <div className="py-1 pl-2 border-r border-b">TUE</div>
        <div className="py-1 pl-2 border-r border-b">WED</div>
        <div className="py-1 pl-2 border-r border-b">THU</div>
        <div className="py-1 pl-2 border-r border-b">FRI</div>
        <div className="py-1 pl-2 border-r">SAT</div>
      </div>
      <div
        className={`${
          view == 0 ? "grid grid-cols-7 h-screen text-sm" : "block"
        }`}
      >
        {dateArr.map((day, i) => (
          <div
            key={i}
            className={
              view == 0
                ? `flex flex-col p-[2px] ${
                    day
                      ? "border border-indigo-100 hover:bg-indigo-100 duration-100"
                      : ""
                  }`
                : day
                ? "border min-h-[6rem]"
                : ""
            }
          >
            <div
              className={
                day
                  ? view == 0
                    ? "text-end text-indigo-700 font-bold"
                    : "bg-indigo-500 text-white font-bold px-2 h-8 flex items-center justify-center"
                  : ""
              }
            >
              {day?.getDate()}
            </div>
            {day && (
              <div
                className={
                  view == 0
                    ? "grow basis-1 max-h-10 text-center overflow-hidden"
                    : "text-center min-h-full py-1"
                }
              >
                {events
                  .filter((e) => new Date(e.date).getTime() === day.getTime())
                  .map((e) => (
                    <ul>
                      <li>{e.event}</li>
                    </ul>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Calendar;
