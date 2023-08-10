import React, { useState } from "react";

function Teamcard(
  props = { rank: 1, name: "JP Masons Team", comment: "hello", id: 1 }
) {
  return (
    <>
      <li className="list-group-item border-0 m-0 p-0">
        <div className="row">
          <div
            className="col-1 border-bottom border-top"
            style={{ fontSize: 45 }}
          >
            {props.rank}
          </div>
          <div
            class="card col-11 border-0 border-bottom border-top"
            style={{ borderRadius: 0 }}
          >
            <div class="card-body">
              <h5 class="card-title">{props.name}</h5>
              <p class="card-text">{props.comment}</p>
              <a
                href={`https://football.fantasysports.yahoo.com/f1/272989/${props.id}`}
                class="btn btn-primary"
                target="_blank"
              >
                View Team
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default Teamcard;
