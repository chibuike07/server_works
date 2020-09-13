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

let array = [];
function getMembers() {
  var requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch("http://localhost:7000/app/", requestOptions)
    .then(response => response.json())
    .then(result => {
      array.push(...result);
      result.map(({ firstName, lastName }) => {
        let li = document.createElement("li");
        li.innerText = `${firstName} ${lastName}`;
        li.addEventListener("click", updateById);
        document.querySelector("ul").appendChild(li);
      });
      // document.write(res);
    })
    .catch(error => console.log("error", error));
}
getMembers();

function updateById(e) {
  console.log(this.innerText);
  let res = array.filter(
    v => this.innerText === `${v.firstName} ${v.lastName}`
  );
  console.log("res", res);
  let result = res.map(v => v._id);
  console.log(result);
}
updateById();
// https://zellwk.com/blog/crud-express-mongodb/

function updateData() {
  var requestOptions = {
    method: "PUT",
    redirect: "follow"
  };

  fetch("http://localhost:7000/app/5e9e0de80b226b168ccace2b", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
}
