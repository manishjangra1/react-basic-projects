function ToDOItem2() {
  let toDoName = "Go to College";
  let toDoDate = "08/11/2024";
  return (
    <div class="container">
      <div class="row md-row">
        <div class="col-6">{toDoName}</div>
        <div class="col-4">{toDoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger md-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDOItem2;
