import s from "./Card.module.scss";
import Link from "next/link";

const Card = ({ title, subscriberCount, id }) => {
  return (
    <div className={s.container} key={id}>
      <Link href={`/moreinfo/${id}`}>
        <h3 className={s.title}>{title}</h3>
      </Link>
      <h3 className={s.subscriberCount}>{subscriberCount}</h3>
    </div>
  );
};

export default Card;
