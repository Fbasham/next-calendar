import { dateToMonthArray } from "../lib/calendar";

function Calendar({ events }) {
  events = JSON.parse(events);
  let dateArr = dateToMonthArray(new Date());
  return (
    <>
      <div className="grid grid-cols-7 border-t border-l font-bold text-sm text-indigo-900 bg-indigo-50">
        <div className="py-1 pl-2 border-r border-b">SUN</div>
        <div className="py-1 pl-2 border-r border-b">MON</div>
        <div className="py-1 pl-2 border-r border-b">TUE</div>
        <div className="py-1 pl-2 border-r border-b">WED</div>
        <div className="py-1 pl-2 border-r border-b">THU</div>
        <div className="py-1 pl-2 border-r border-b">FRI</div>
        <div className="py-1 pl-2 border-r">SAT</div>
      </div>
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
                  events.find(
                    (e) => new Date(e.date).getTime() === day.getTime()
                  )?.event
                }
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Calendar;
