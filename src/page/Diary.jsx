import styled from "styled-components";
import TitleHome from "../component/TitleHome";
import EditAndDelete from "../component/EditAndDelete";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
`;

const StyledDiaryBox = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  border: 0.1px solid #616161;
`;

const StyledTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

function Daily({ diaries, setDiaries }) {
  function handleDelete(id) {
    setDiaries(diaries.filter((diary) => diary.id !== id));
  }

  return (
    <>
      <TitleHome title="Diary" diaries={diaries} setDiaries={setDiaries} />
      <StyledContainer>
        {[...diaries].reverse().map((diary, i) => (
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

export default Daily;
