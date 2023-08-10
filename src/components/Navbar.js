import React, { useState } from "react";
import Teamcard from "./Teamcard";
import TeamRankings from "./TeamRankings";
const rankings = TeamRankings;
function Navbar() {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <div className=" text-left" style={{ fontSize: 50 }}>
            TLB <i class="fa-solid fa-football"></i>
          </div>
        </div>
        <div className="col-9 fw-bold text-center" style={{ fontSize: 50 }}>
          Power Rankings
        </div>
      </div>

      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Pre-Season
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Week 1
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Week 2
          </a>
        </li>
        <li li class="nav-item">
          <a class="nav-link" href="#">
            Week 3
          </a>
        </li>
        <li li class="nav-item">
          <a class="nav-link" href="#">
            Week 4
          </a>
        </li>
        <li li class="nav-item">
          <a class="nav-link" href="#">
            Week 5
          </a>
        </li>
        <li li class="nav-item">
          <a class="nav-link" href="#">
            Week 6
          </a>
        </li>
        <li li class="nav-item">
          <a class="nav-link" href="#">
            Week 7
          </a>
        </li>
        <li li class="nav-item">
          <a class="nav-link" href="#">
            Week 8
          </a>
        </li>
        <li li class="nav-item">
          <a class="nav-link" href="#">
            Week 9
          </a>
        </li>
        <li li class="nav-item">
          <a class="nav-link" href="#">
            Week 10
          </a>
        </li>
        <li li class="nav-item">
          <a class="nav-link" href="#">
            Week 11
          </a>
        </li>
        <li li class="nav-item">
          <a class="nav-link" href="#">
            Week 12
          </a>
        </li>
        <li li class="nav-item">
          <a class="nav-link" href="#">
            Week 13
          </a>
        </li>
        <li li class="nav-item">
          <a class="nav-link" href="#">
            Week 14
          </a>
        </li>
        <li li class="nav-item">
          <a class="nav-link" href="#">
            Week 15
          </a>
        </li>
        <li li class="nav-item">
          <a class="nav-link" href="#">
            Week 16
          </a>
        </li>
        <li li class="nav-item">
          <a class="nav-link" href="#">
            Week 17
          </a>
        </li>
      </ul>
      <div>
        <br></br>
        <br></br>

        <br></br>
      </div>
      {rankings.map((who) => (
        <ul className=" list-group border-0">
          <Teamcard
            rank={who.Rank}
            name={who["Team Name"]}
            comment={who.comment}
            id={who._id}
          />
        </ul>
      ))}
    </>
  );
}

export default Navbar;
