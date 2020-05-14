const getValue = () => {
  let get = document.getElementById("get").value;
  console.log(get);
  try {
    fetch("http://localhost:7000/", {
      method: "GEt",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.parse(get)
    });
  } catch (err) {
    console.error(err);
  }
};
