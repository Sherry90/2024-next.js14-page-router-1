import Button from "../ui/button";
import classes from "./event-item.module.css"
import DateIcon from "../icons/date-icon";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const address = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{address}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}> Explore Event</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
