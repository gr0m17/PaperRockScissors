import { CSSTransition } from "react-transition-group";
const DataTree = (props) => {
  return (
    <div>
      {/* <div>the data tree [and buttons]: </div> */}
      <div className="buttonsBox">
        {props.BRANCH_DATA &&
          console.log([...Object.values(props.BRANCH_DATA)])}
        {props.BRANCH_DATA &&
          [...Object.values(props.BRANCH_DATA)].map((branch) => {
            return (
              <div key={branch.videoID} id={branch.name}>
                <CSSTransition
                  in={true}
                  appear={true}
                  timeout={1000}
                  classNames="fade"
                  unmountOnExit
                >
                  {/* {branch.name}, links to {+branch.videoID} */}
                  <button
                    className="buttons"
                    onClick={() => {
                      props.resetHandler(
                        +branch.videoID + +branch.cpuOffset(),
                        branch.now
                      );
                    }}
                  >
                    {branch.buttonText}
                  </button>
                </CSSTransition>
              </div>
            );
          })}{" "}
      </div>
    </div>
  );
};

export default DataTree;
