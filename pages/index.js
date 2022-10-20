import Calendar from "../components/Calendar";
import { useState } from "react";

export default function Index({ events }) {
  const [date, setDate] = useState(new Date());

  function handleChangeMonth(k) {
    let newDate = new Date(date);
    newDate.setMonth(date.getMonth() + k);
    setDate(newDate);
  }

  return (
    <main className="max-w-4xl mx-auto px-5 pt-10">
      <div className="flex gap-1 text-sm items-baseline text-indigo-900">
        <button onClick={() => handleChangeMonth(-1)}>PREV</button>
        <button onClick={() => handleChangeMonth(1)} className="mr-2">
          NEXT
        </button>
        <span className="text-lg font-bold">
          {date.toUTCString().slice(8, 16)}
        </span>
        <button className="ml-auto">CALENDAR</button>
        <button>LIST</button>
      </div>
      <Calendar date={date} events={events} />
    </main>
  );
}

export async function getStaticProps() {
  let events = [
    { date: new Date(2022, 9, 1), event: "event 1" },
    { date: new Date(2022, 9, 2), event: "event 2" },
    {
      date: new Date(2022, 9, 17),
      event: "event with long text to test wrapping blah blah blah blah blah ",
    },
    { date: new Date(2022, 9, 26), event: "event on the 26th of Oct." },
    { date: new Date(2022, 9, 31), event: "Halloween" },
  ];
  return {
    props: { events: JSON.stringify(events) },
  };
}
