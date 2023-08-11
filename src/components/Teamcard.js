import React, { useState } from "react";

function Teamcard(
  props = {
    rank: 1,
    name: "JP Masons Team",
    comment: "hello",
    id: 1,
    wins: 5,
    losses: 5,
  }
) {
  return (
    <>
      <li className="list-group-item border-0 m-0 p-0">
        <div className="row align-items-center border-top border-bottom ">
          <div className=" col-3 col-md-1 text-center" style={{ fontSize: 40 }}>
            {props.rank}
          </div>
          <div
            class="card col-md-11 col-8 border-0 "
            style={{ borderRadius: 0 }}
          >
            <div class="card-body">
              <h5 class="card-title m-0 col-12">{props.name}</h5>
              <div className="row">
                <div className="col-2" style={{ fontSize: 15 }}>
                  ({props.wins}-{props.losses}){" "}
                  <i
                    class="fa-solid fa-arrow-up"
                    style={{ color: "#349720" }}
                  ></i>
                </div>
              </div>
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
