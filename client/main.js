const textForm = document.getElementById("text-form")
const inputText = document.getElementById("input-text")
const taskListContainer = document.getElementById("tasklist-container");

document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
};

document.getElementById("fortuneButton").onclick = function () {
  axios.get("http://localhost:4000/api/fortune")
    .then(function (response) {
      const data = response.data;
      alert(data);
    });
};

function displayTaskList(arr){
  while(taskListContainer.firstChild){
    taskListContainer.removeChild(taskListContainer.firstChild)
  }

  for (let i = 0; i < arr.length; i++){
    const newTask = document.createElement("div");
   
    newTask.innerHTML = `<p>${arr[i].text}</p>`

    taskListContainer.appendChild(newTask);
  }
}

textForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const newDisplayText = {
    text: inputText.value
  }

  // console.log(newDisplayText);

  axios.post("http://localhost:4000/api/display", newDisplayText)
    .then(res => {
      console.log((res.data));
      displayTaskList(res.data);
    });

  inputText.value = '';
})
  