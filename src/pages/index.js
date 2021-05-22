import React, { useContext } from "react";
import styled from "styled-components";
import Contact from "../components/Contact";
import Translate from "../components/Translate";
import Translation from "../components/Translation";
import { SubTitle } from "../components/common";
import Fade from "react-reveal/Fade";

const SeeMore = styled.a`
  text-decoration: none;
  color: #1e90ff;
  font-weight: bold;
  &:hover {
    opacity: 30%;
    // transition: all 0.4s ease-in;
  }
`;

const IndexPage = ({ data }) => {
  return (
    <>
      <section>
        <div
          style={{
            margin: `0 a duto`,
            maxWidth: 650,
            padding: `5rem 20px 0rem`,
          }}
        >
          <Translate></Translate>
          <Translation></Translation>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 480,
              padding: `0rem 0.8rem 1.45rem`,
            }}
          >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <Contact></Contact> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
