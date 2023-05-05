import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import TextInput from "../UI/TextInput";
import Code from "../UI/Code";
import styles from "./Page.module.css";
import SmallButton from "../UI/SmallButton";
import ScrollList from "../UI/ScrollList";
import $ from "jquery";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { db } from "../../firebase.js";
import Img from "../UI/Img";

export default function PostWritePage(props) {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [clicked, setclicked] = useState(false);
  const [thumb, setThumb] = useState("");

  //컴포넌트를 어레이화 시켜서 제작
  const [textareas, setTextareas] = useState([]);
  const [num, setNum] = useState(textareas.length - 1);
  const [appendtext, setAppendText] = useState("");
  //   thumbnail 추가 ---> array에서 처음 인덱스 찾아서 변경
  const [index, setIndex] = useState();

  // 타입변경
  const typechange = (type) => {
    const id = new Date().getTime().toString();
    const newTextArea = { id, type, value: "" };
    setTextareas([...textareas, newTextArea]);
  };

  useEffect(() => {
    setIndex(textareas.findIndex((arr) => arr.search == "img"));
    index > -1
      ? setThumb(textareas[index].value)
      : setThumb(
          "https://velog.velcdn.com/images/heelieben/post/87bbb462-dbd5-49a5-a9e9-70ed2007cdaf/image.png"
        );
    //마지막 어레이의 값 확인 할 수 있도록 어레이 번호에 맞는 길이 제작
    num == -1 ? setNum(0) : setNum(textareas.length - 1);
    // 어레이의 길이가 0보다 클때 text value 를 확인 가능하게 만듬
    textareas.length > 0
      ? setAppendText(textareas[num].value)
      : setAppendText("");
  }, [textareas.length]);

  const Textareaappend = (e, id) => {
    const newTextArea = textareas.map((text) =>
      //아이디가 같게 나오면 vlaue들옥
      text.id == id ? { ...text, value: e.target.value } : text
    );
    setTextareas(newTextArea);
  };

  // 코드의 색상 codes 어레이가 변경될 때 마다 실행 시킬 수 있도록 제작
  useEffect(() => {
    Prism.highlightAll();
    console.log(textareas);
  }, [textareas]);
  //토글형식으로 제작할 수 있게
  const toggle = function (e) {
    setclicked(!clicked);
  };

  const done = function () {
    const timestamp = new Date().getTime().toString();
    db.collection("post")
      .doc(timestamp)
      .set({
        id: timestamp,
        title: title,
        content: content,
        aftercontents: textareas,
        imgsrc: thumb,
        comments: [],
        profilethumb:
          "https://bot-log-product.s3.ap-northeast-2.amazonaws.com/product/tving/still/P001599390-%EB%84%A4%EB%AA%A8%EB%B0%94%EC%A7%80_%EC%8A%A4%ED%8F%B0%EC%A7%80%EB%B0%A5_%EC%8B%9C%EC%A6%8C12.jpeg",
        userid: "wksehs123",
      })
      .then(() => {
        // console.log(thumb);
        nav("/");
      });
  };

  return (
    <div className={styles.Page_Wrapper}>
      <div className={styles.Page_SecondWrapper}>
        <TextInput
          height={44}
          minheight={116}
          fontsize={42}
          fontweight={700}
          placeholder={"제목 없음"}
          lineheight={100}
          value={title}
          margin="24px 0px 0px"
          onChange={function (e) {
            setTitle(e.target.value);
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
        />

        <SmallButton
          onClick={() => {
            toggle();
          }}
          icon="add"
        ></SmallButton>

        {clicked && (
          <ScrollList
            onClickText={(e) => {
              //있는배열 이후에 newTextArea 추가
              typechange("text");
              setclicked(!clicked);
            }}
            // 코드 버튼 클릭시
            onClickCode={(e) => {
              //있는배열 이후에 newCodeArea 추가
              typechange("code");
              setclicked(!clicked);
            }}
            //이미지추가
            onClickImg={(e) => {
              // file클릭 이벤트 추가
              typechange("img");
              $("#file").click();
            }}
            onChangeImg={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onload = (e) => {
                console.log(e.target.result);
                const id = new Date().getTime().toString();
                const newTextArea = textareas.map((text) =>
                  //아이디가 같게 나오면 vlaue들옥

                  text.type == "img"
                    ? {
                        ...text.length,
                        id: id,
                        value: e.target.result,
                        search: "img",
                      }
                    : text
                );

                setTextareas(newTextArea);

                //   setThumb(thumbnail)
              };
              reader.readAsDataURL(file);

              console.log(index);

              // console.log(file)
              setclicked(!clicked);
            }}
          ></ScrollList>
        )}

        <TextInput
          height={20}
          minheight={62}
          fontsize={20}
          fontweight={500}
          lineheight={150}
          placeholder={"내용 없음"}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            console.log(e.target.style);
            e.target.style.height = "30px";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
        />

        {textareas.map((text) =>
          text.type === "text" ? (
            <TextInput
              height={20}
              minheight={62}
              fontsize={20}
              fontweight={500}
              lineheight={150}
              placeholder={"내용 없음"}
              key={text.id}
              value={text.value}
              onChange={(e) => {
                Textareaappend(e, text.id);
                e.target.style.height = "30px";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
            />
          ) : text.type === "code" ? (
            <Code
              key={text.id}
              value={text.value}
              code={text.value}
              onChange={(e) => {
                Textareaappend(e, text.id);
              }}
              onKeyDown={(e) => {
                console.log(e.target.selectionStart);
                if (e.keyCode == 9) {
                  const start = e.target.selectionStart;
                  const end = e.target.selectionEnd;
                  const tab = "\t";
                  e.target.value =
                    e.target.value.substring(0, start) +
                    tab +
                    e.target.value.substring(end);
                  e.target.selectionStart = start + 1;
                  e.target.selectionEnd = start + 1;
                  e.preventDefault();
                  console.log(start);
                  // console.log(end)
                }
              }}
            />
          ) : (
            <Img
              key={text.id}
              src={text.value}
              onChange={(e) => {
                Textareaappend(e, text.id);
              }}
            />
          )
        )}
      </div>

      <div className={styles.btnContainer}>
        <Button
          title="작성하기"
          onClick={() => {
            // 텍스트 영역에서 추가 후 입력이 안되었을 때 내용을 입력해 달라는 식 추가
            content == "" || title == "" || appendtext == ""
              ? alert("내용을 입력해주세요.")
              : done();
          }}
        />
      </div>
    </div>
  );
}
