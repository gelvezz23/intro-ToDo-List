import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={"100%"}
    height={"100%"}
    viewBox="0 0 400 150 "
    backgroundColor="#707070"
    foregroundColor="#9670db"
    {...props}
  >
    <circle cx="10" cy="20" r="8" />
    <rect x="25" y="15" rx="5" ry="5" width="90%" height="10" />
    <circle cx="10" cy="50" r="8" />
    <rect x="25" y="45" rx="5" ry="5" width="90%" height="10" />
    <circle cx="10" cy="80" r="8" />
    <rect x="25" y="75" rx="5" ry="5" width="90%" height="10" />
    <circle cx="10" cy="110" r="8" />
    <rect x="25" y="105" rx="5" ry="5" width="90%" height="10" />
  </ContentLoader>
);

MyLoader.metadata = {
  name: "Abraham Calsin",
  github: "abrahamcalsin",
  description: "Loading a list of tasks.",
  filename: "TaskList",
};

export default MyLoader;
