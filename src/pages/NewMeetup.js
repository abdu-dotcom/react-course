import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

// berfungsi sebagai menampilkan halaman menambahkan meetups
function NewMeetupPage() {
  const history = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-e19fe-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData), // mengubah format data menjadi json
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(()=> {
      history("/")
    });
  }
  return (
    <section>
      <h1> New Meet up Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
