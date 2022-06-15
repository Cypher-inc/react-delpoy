const FormInput = (props) => {
  let emptyVar = "No Data found";

  if (props.userDataProp.length > 0) {
    emptyVar = props.userDataProp.map((newData) => (
      <div class="card">
        <div class="card-body text-center">
          {newData.Name} {newData.Age}
        </div>
      </div>
    ));
  }

  return (
    <div className="card1 mt-4 mb-4 col-md-8">
      <div class="card">
        <div class="card-body text-center">{emptyVar}</div>
      </div>
    </div>
  );
};

export default FormInput;
