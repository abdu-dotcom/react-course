import { useRef } from "react";

import Card from "../ui/Card";
import style from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    // data yang diinput masukan kedalam object bernama meetupData
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={style.form} onSubmit={submitHandler}>
        <div className={style.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={style.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={style.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={style.control}>
          <label htmlFor="desciption">Description</label>
          <textarea id="description" rows="3" required ref={descriptionInputRef}></textarea>
        </div>
        <div className={style.actions}>
            <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
