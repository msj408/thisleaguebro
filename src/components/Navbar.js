import React, { useState } from "react";
import Teamcard from "./Teamcard";
import TeamRankings from "./TeamRankings";
import Comments from "./comments";
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

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Additional Weeks
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li li class="dropdown-item">
              <a class="nav-link" href="#">
                Week 12
              </a>
            </li>
            <li li class="dropdown-item">
              <a class="nav-link" href="#">
                Week 13
              </a>
            </li>
            <li li class="dropdown-item">
              <a class="dropdown-item" href="#">
                Week 14
              </a>
            </li>
            <li li class="dropdown-item">
              <a class="nav-link" href="#">
                Week 15
              </a>
            </li>
            <li li class="dropdown-item">
              <a class="nav-link" href="#">
                Week 16
              </a>
            </li>
            <li li class="dropdown-item">
              <a class="nav-link" href="#">
                Week 17
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="row">
        <div className="col-8">
          {rankings.map((who) => (
            <ul className=" list-group border-0">
              <Teamcard
                rank={who.Rank}
                name={who["Team Name"]}
                comment={who.comment}
                id={who._id}
                wins={who.wins}
                losses={who.losses}
              />
            </ul>
          ))}
        </div>

        <div className="col-4">
          <div
            className="border rounded text-center fw-bolder"
            style={{ fontSize: 20 }}
          >
            {" "}
            SHIT TALK
          </div>
          <div class="card-body p-0">
            <div class="form-outline mb-4">
              <textarea
                type="text-area"
                id="addANote"
                class="form-control"
                placeholder="Type comment..."
              />
              <select className="col-12" type="dropdown">
                <option>Gurr's Team</option>
                <option>JP Masons Team</option>
                <option>Beast Mode</option>
                <option>Dillards</option>
                <option>Harpreet's Team</option>
                <option>Team Sidhu</option>
                <option>Team Bains</option>
                <option>Papi Chulo</option>
                <option>Jaspalm's Team</option>
                <option>Team NextYear</option>
                <option>Gurr's Team</option>
                <option>Cee Deez Nuts</option>
                <option>NFL Youngboy</option>
                <option>MAMBA FOREVER</option>
              </select>
              <button class="col-12 btn btn-primary">Post</button>
            </div>
          </div>
          {/*{rankings.map((who) => */}
          <ul className=" list-group border-0">
            <Comments />
          </ul>
          {/* ))}*/}
        </div>
      </div>
    </>
  );
}

export default Navbar;
