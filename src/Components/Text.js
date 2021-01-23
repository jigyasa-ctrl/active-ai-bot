import React from "react";

function Text(props) {
  return (
    <div class="message message-personal">
      <p>{props.name}</p>
    </div>
  );
}

export default Text;
