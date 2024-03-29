import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import NodeIcon from "@iconify/icons-logos/nodejs";
import NestIcon from "@iconify/icons-logos/nestjs";
import NextIcon from "@iconify/icons-logos/nextjs";
import AWsIcon from "@iconify/icons-logos/aws";
import PosgreIcon from "@iconify/icons-logos/postgresql";
import MongoIcon from "@iconify/icons-logos/mongodb";

// import {Solidity} from "/images/projects/solidity.svg";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
      var about1 = this.props.resumeBasicInfo.description1;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={angularIcon}
                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={NodeIcon}
                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={NestIcon}
                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={NextIcon}
                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={AWsIcon}
                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={PosgreIcon}
                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                  />
                   <Icon
                    icon={MongoIcon}
                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                  />
      
                </span>
              </div>
            </div>

            <div className="col-md-8 right">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                    <br />
                    {about1}
                    <br />
                    Thank you 💜
                  </div>

                  {/* <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
