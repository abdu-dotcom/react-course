import NewMeetupForm from "../components/meetups/NewMeetupForm";

// berfungsi sebagai menampilkan halaman menambahkan meetups
function NewMeetupPage() {

  function addMeetupHandler() {
    
  }
  return (
    <section>
      <h1> New Meet up Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  );
}

export default NewMeetupPage;
