import React from "react";

function ListCard() {
  return (
    <>
      <div class="message new">
        <div id="card_list">
          <span id="tweet_card">
            <img src="https://static.miraheze.org/rottenwebsiteswiki/6/61/Twitter-logo-final.png"></img>
            <p>Twitter</p>
          </span>
          <span>
            <h3>
              "Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well"
            </h3>
          </span>
        </div>
      </div>
      <div class="message new">
        <div id="card_list">
          <span id="tweet_card">
            <img src="https://static.miraheze.org/rottenwebsiteswiki/6/61/Twitter-logo-final.png"></img>
            <p>Twitter</p>
          </span>
          <span>
            <h3>"Can’t believe we gave up hunting n gathering to pay rent"</h3>
          </span>
        </div>
      </div>
      <div class="message new">
        <div id="card_list">
          <span id="tweet_card">
            <img src="https://static.miraheze.org/rottenwebsiteswiki/6/61/Twitter-logo-final.png"></img>
            <p>Twitter</p>
          </span>
          <span>
            <h3>
              "I’m fairly certain my dogs would run away and hide if I’m ever
              attacked by a leaf."
            </h3>
          </span>
        </div>
      </div>
    </>
  );
}

export default ListCard;
