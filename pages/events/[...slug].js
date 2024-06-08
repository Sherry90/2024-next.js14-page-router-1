import { useRouter } from "next/router";

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

  return (
    <div>
      <h1>Filtered Events</h1>
    </div>
  );
};

export default FilteredEventsPage;
