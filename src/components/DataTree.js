const DataTree = (props) => {
  let branchOffset;
  console.log("props.setCurrentVideoID");
  return (
    <div>
      <div>
        <h2>the data tree:</h2>
      </div>
      <div>
        {props.BRANCH_DATA &&
          console.log([...Object.values(props.BRANCH_DATA)])}
        {props.BRANCH_DATA &&
          [...Object.values(props.BRANCH_DATA)].map((branch) => {
            return (
              <div key={branch.videoID}>
                {branch.name}, links to {+branch.videoID} + cpuOffset()]{" "}
                <button
                  onClick={() => {
                    props.resetHandler(+branch.videoID + +branch.cpuOffset());
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
