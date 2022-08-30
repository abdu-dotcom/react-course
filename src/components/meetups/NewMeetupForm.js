import Card from "../ui/Card";
import style from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  return (
    <Card>
      <form className={style.form}>
        <div className={style.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={style.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="text" required id="image" />
        </div>
        <div className={style.control}>
          <label htmlFor="image">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={style.control}>
          <label htmlFor="image">Description</label>
          <textarea id="description" rows="3" required></textarea>
        </div>
        <div className={style.actions}>
            <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
