const taskContainer = document.querySelector(".task__container");
//Global store
const globalstore=[];
//card1,card2,card3

const newCard = ({
  id,
  imageUrl,
  taskTitle,
  taskDescription,
  taskType,
}) => `<div class="col-md-6 col-lg-4" id=${id}>
<div class="card">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success">
      <i class="fas fa-pencil-alt"></i>
    </button>
    <button type="button" class="btn btn-outline-danger">
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
  <img
    src=${imageUrl}
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${taskTitle}</h5>
    <p class="card-text">
      ${taskDescription}
    </p>
    <a href="#" class="btn btn-primary">${taskType}</a>
  </div>
  <div class="card-footer text-muted">
    <button type="button" class="btn btn-outline-primary float-end">
      Open Task
    </button>
  </div>
</div>
</div>`;

const loadinitialTaskCards= () =>
{
  //access localstorage
const getInitialData=localStorage.getItem("tasky");
if(!getInitialData) return;

const {cards}=JSON.parse(getInitialData);
cards.map((cardObject) =>
  {
    const createNewCard=newCard(cardObject);
    taskContainer.insertAdjacentHTML("beforeend",createNewCard);
    globalstore.push(cardObject);
  }
  );
};



const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`, // unique number for card id 
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("taskdescription").value,
  };

  const createNewCard = newCard(taskData);

  taskContainer.insertAdjacentHTML("beforeend", createNewCard);
  globalstore.push(taskData);
 // console.log(globalstore);
 //Application programming interface
//localstorage->interface->programming
// add to localstorage
localStorage.setItem("tasky",JSON.stringify({cards:globalstore}));};
//key->data

//The modal was not closing upon adding new card,
// the cards were deleted after refresh->local storage(5MB)
//features
//delete modal feature
//open task
//edit task
