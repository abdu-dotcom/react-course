// berfungsi sebagai menampilkan halaman AllMeetups
import { useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] =useState([]);
  fetch(
    "https://react-getting-started-e19fe-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json"
  )
    .then((response) => {
      return response.json(); // mengubah format data json menjadi Javascript object
    })
    .then((data) => {
      setIsLoading(false);
      setLoadedMeetups(data);
    });

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1> All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
