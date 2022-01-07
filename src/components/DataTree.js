const DataTree = (props) => {
  return (
    <div>
      <div>the data tree [and buttons]: </div>
      <div>
        {props.BRANCH_DATA &&
          console.log([...Object.values(props.BRANCH_DATA)])}
        {props.BRANCH_DATA &&
          [...Object.values(props.BRANCH_DATA)].map((branch) => {
            return (
              <div key={branch.videoID}>
                {branch.name}, links to {+branch.videoID}
                <button
                  onClick={() => {
                    props.resetHandler(
                      +branch.videoID + +branch.cpuOffset(),
                      branch.now
                    );
                  }}
                >
                  {branch.buttonText}
                </button>
              </div>
            );
          })}{" "}
      </div>
    </div>
  );
};

export default DataTree;
