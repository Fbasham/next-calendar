import Calendar from "../components/Calendar";

export default function Index({ events }) {
  return (
    <main className="max-w-4xl mx-auto px-5 pt-10">
      <Calendar events={events} />
    </main>
  );
}

export async function getStaticProps() {
  let events = [
    { date: new Date(2022, 9, 1), event: "event 1" },
    { date: new Date(2022, 9, 2), event: "event 2.0" },
    { date: new Date(2022, 9, 2), event: "event 2.1" },
    { date: new Date(2022, 9, 2), event: "event 2.2" },
    { date: new Date(2022, 9, 2), event: "event 2.3" },
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
