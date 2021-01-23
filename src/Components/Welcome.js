import React from "react";

function Welcome() {
  var today = new Date();
  var date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;

  return (
    <div class="message new">
      <div id="card_welcome">
        <img src="http://www.business-opportunities.biz/wp-content/uploads/2016/09/welcome_sign.jpe"></img>
        <span>
          <h3>Welcome Active.ai</h3>
          <p>{dateTime}</p>
        </span>
      </div>
    </div>
  );
}

export default Welcome;
