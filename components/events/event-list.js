import EventItem from "./event-item";

const EventList = (props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => (
        <EventItem key={items.id} />
      ))}
    </ul>
  );
};

export default EventList;
