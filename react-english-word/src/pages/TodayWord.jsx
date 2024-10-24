import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TodayWordContainer = styled.div`
  width: 100%;
  height: calc(100% - 72px - 61px);
  min-height: calc(100% - 72px - 61px);
`;
const WordInnerContainer = styled.div`
  height: calc(100% - 30px);
  border-radius: 20px;

  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 10px 20px 20px 20px;
`;
const Text = styled.div`
  text-align: center;

  font-size: 30px;
  font-weight: 700;
`;
const Word = styled(Text)`
  color: black;
  margin-bottom: 10px;
`;
const Mean = styled(Text)`
  color: #36afff;
`;

function TodayWord() {
  const [word, setWord] = useState([]);

  useEffect(() => {
    setWord(JSON.parse(localStorage.getItem("word") || "[]"));
  }, []);
  return (
    <>
      <Header>오늘의 단어</Header>
      <TodayWordContainer>
        <Swiper spaceBetween={50} style={{ height: "100%" }}>
          {word.map((v) => {
            return (
              <SwiperSlide>
                <WordInnerContainer>
                  <Word>{v.word}</Word>
                  <Mean>{v.mean}</Mean>
                </WordInnerContainer>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </TodayWordContainer>
    </>
  );
}

export default TodayWord;
