import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading</p>;
  }

  const numYear = +filteredData[0];
  const numMonth = +filteredData[1];

  if (isNaN(numYear) || isNaN(numMonth) || numMonth < 1 || numMonth > 12) {
    return <p>Invalid filter.</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || !filteredEvents.length) {
    return <p>No events found for the chosen filter!</p>;
  }

  return (
    <>
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
