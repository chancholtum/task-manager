import styled from "styled-components";
import TitleHome from "./TitleHome";
import EditAndDelete from "./EditAndDelete";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  gap: 2rem;
`;

const StyledDiaryBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  background: #616161;
  border-radius: 10px;
  border: 0.1px solid #9e9e9e;
`;

const StyledTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

function DiaryHome({ diaries, setDiaries }) {
  function handleDelete(id) {
    setDiaries(diaries.filter((diary) => diary.id !== id));
  }
  return (
    <>
      <TitleHome title="Diary" diaries={diaries} setDiaries={setDiaries} />
      <StyledContainer>
        {diaries
          // .slice(0, 3)
          .slice(Math.max(diaries.length - 3, 0))
          .reverse()
          .map((diary, i) => (
            <StyledDiaryBox key={diary.id}>
              <StyledTitleBox>
                <p>{diary.date}</p>
                <EditAndDelete
                  id={diary.id}
                  children={handleDelete}
                  diary={diary}
                  diaries={diaries}
                  setDiaries={setDiaries}
                  editModal="diary"
                  i={i}
                />
              </StyledTitleBox>
              <p>{diary.note}</p>
            </StyledDiaryBox>
          ))}
      </StyledContainer>
    </>
  );
}

export default DiaryHome;
