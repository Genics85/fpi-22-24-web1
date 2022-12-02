function meetingBooked() {
  console.log("clicked");
  let name = document.getElementById("namez").value;
  let number = document.getElementById("numberz").value;
  let mission = document.getElementById("mission").value;

  alert(
    `Hi, ${name} your appointment for the ${mission} session has been successfully booked, we will contact you on ${number}. Thank You`
  );
}
