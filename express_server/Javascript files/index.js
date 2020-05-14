const handleSubmit = async () => {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let favoriteColor = document.getElementById("favoriteColor").value;
  let isActive = document.getElementById("isActive").value;
  formDatas = {
    firstName,
    lastName,
    phoneNumber,
    favoriteColor,
    isActive
  };
  try {
    await fetch("http://localhost:7000/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formDatas)
    });
  } catch (err) {
    console.log(err.message);
  }
};

function getMembers() {
  var requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch("http://localhost:7000/app/", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
}
getMembers();
// https://zellwk.com/blog/crud-express-mongodb/
