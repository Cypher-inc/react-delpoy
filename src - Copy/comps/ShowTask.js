import { Container, Row, Button } from "react-bootstrap";
import "./ShowTasks.css";
import "../../node_modules/animate.css/animate.css";

const ShowTask = (props) => {
  let emptyVar;

  ///update
  const addClassFunc = (newData0) => {
    // console.log(newData0.text);
    props.onDone(newData0);
  };

  /////delete
  const deleteTextFunc = (newData1) => {
    // console.log(testVar);
    props.onDeleteText(newData1);
  };

  if (props.isLoadingProp) {
    emptyVar = (
      <ul className="bg-light text-center">
        <p className="loadingP">{"⏳ Loading..."}</p>
      </ul>
    );
  } else if (props.items.length === 0) {
    emptyVar = (
      <ul className="bg-secondary text-center">
        <p className="loadingP">{"No Task Found"}</p>
      </ul>
    );
  } else if (props.items.length > 0) {
    emptyVar = props.items.map((newData) => (
      <div
        key={newData.id}
        className={`text-center taskItem animate__animated ${
          newData.del ? "fadeOut" : "animate__fadeIn "
        }`}
      >
        <ul
          className={`${
            newData.done ? "rowFade" : ""
          } d-flex justify-content-between align-items-center`}
        >
          <Button
            variant="success"
            className="btn1 suc"
            onClick={() => addClassFunc(newData)}
          >
            ✔
          </Button>
          <p className={`text-p ${newData.done ? "pFade" : ""}`}>
            {newData.text}
          </p>
          <Button
            variant="danger"
            className="btn1 del"
            onClick={() => deleteTextFunc(newData)}
          >
            ❌
          </Button>
        </ul>
      </div>
    ));
  }

  return (
    <Container className="displayCon mt-1 mb-5 ">
      <Row className="displayRow">{emptyVar}</Row>
    </Container>
  );
};
export default ShowTask;
