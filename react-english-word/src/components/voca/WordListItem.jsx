import styled from "styled-components";
import deleteIcon from "../../assets/icons/delete.svg";
const WordListItemContainer = styled.div`
  width: 100%;

  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 20px;
`;

const WordListItemContent = styled.div`
  display: flex;
`;

const WordListItemWord = styled.div`
  font-size: 12px;
  margin-right: 6px;
`;
const WordListItemMean = styled.div`
  color: #36afff;
  font-size: 12px;
`;

// // mean, word, index, deleteWord
function WordListItem({ word, mean, index, deleteWord }) {
  return (
    <WordListItemContainer>
      <WordListItemContent>
        <WordListItemWord>{word}</WordListItemWord>
        <WordListItemMean>{mean}</WordListItemMean>
      </WordListItemContent>
      <img
        src={deleteIcon}
        alt="삭제"
        style={{ cursor: "pointer" }}
        onClick={() => {
          //   삭제 버튼을 클릭 시
          deleteWord(index);
        }}
      />
    </WordListItemContainer>
  );
}
export default WordListItem;
