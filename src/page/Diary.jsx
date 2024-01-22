import styled from "styled-components";
import TitleHome from "../component/TitleHome";
import EditAndDelete from "../component/EditAndDelete";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

  gap: 3rem;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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

function Daily({ diaries, setDiaries, dateFormatToDisplay }) {
  function handleDelete(id) {
    setDiaries(diaries.filter((diary) => diary.id !== id));
  }

  return (
    <>
      <TitleHome
        title="Diary"
        diaries={diaries}
        setDiaries={setDiaries}
        dateFormatToDisplay={dateFormatToDisplay}
      />
      <StyledContainer>
        {[...diaries].reverse().map((diary, i) => (
          <StyledDiaryBox key={diary.id}>
            <StyledTitleBox>
              <p>{dateFormatToDisplay(diary.date)}</p>
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
