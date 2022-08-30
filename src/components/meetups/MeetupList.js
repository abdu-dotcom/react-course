import style from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem.js";

function MeetupList(props) {
  return (
    <ul className={style.list}>
      {props.meetups.map((meetups) => {
        return (
          <MeetupItem
            key={meetups.id}
            id={meetups.id}
            image={meetups.image}
            title={meetups.title}
            address={meetups.address}
            description={meetups.description}
          />
        );
      })}
    </ul>
  );
}

export default MeetupList;
