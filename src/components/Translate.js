import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const SubContainer1 = styled.div`
  display: flex;
  margin-bottom: 1rem;
  alignitems: center;
`;

const Title = styled.p`
  margin: 0;
  padding: 3px;
`;

// const Button = styled.button`
//   padding: 2px 15px;
//   background: #1e90ff;
//   height: 30px;
//   color: white;
//   font-size: 10px;
//   border-radius: 4px;
//   border: 1px solid #ddd;
//   box-shadow: none;
//   &:hover {
//     opacity: 80%;
//     cursor: pointer;
//   }
// `

const TEXTAREACONTAINER = styled.div`
  display: block;
  width: 100%;
  height: 172px;
  min-height: 25vh !important;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 18px;
  border-radius: 4px;
  background: #fff;
  border: none;
  box-shadow: 0px 8px 32px rgb(0 0 0 / 8%) !important;
`;

const TEXTAREA = styled.textarea`
  display: block;
  width: 100%;
  height: 8rem;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 18px;
  border-radius: 4px;
  border: none;
  box-shadow: none;
`;

const Form = styled.form`
  max-width: 100%;
  margin: 0 auto;
  text-align: left;
`;

const Translate = () => {
  return (
    <>
      <Container>
        <Form name="translate" method="post" action="/predict">
          <SubContainer1>
            <Title>Translate from French</Title>
            {/* <Button type="submit" block>
            送信
          </Button> */}
          </SubContainer1>
          <TEXTAREACONTAINER>
            <TEXTAREA required placeholder="Input the text" name="translate" />
          </TEXTAREACONTAINER>
        </Form>
      </Container>
    </>
  );
};

export default Translate;
