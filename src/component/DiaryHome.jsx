import styled from "styled-components";
import TitleHome from "./TitleHome";
import EditAndDelete from "./EditAndDelete";

const StyledContainer = styled.div`
  display: flex;
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

function DiaryHome() {
  return (
    <>
      <TitleHome title="Diary" />
      <StyledContainer>
        <StyledDiaryBox>
          <StyledTitleBox>
            <p>5 Jan 2024</p>
            <EditAndDelete />
          </StyledTitleBox>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            dolorum repudiandae temporibus autem a nobis soluta reprehenderit,
            debitis placeat suscipit nihil maiores ipsum tenetur velit ut
            accusantium error, voluptatem impedit.
          </p>
        </StyledDiaryBox>
        <StyledDiaryBox>
          <StyledTitleBox>
            <p>4 Jan 2024</p>
            <EditAndDelete />
          </StyledTitleBox>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            dolorum repudiandae temporibus autem a nobis soluta reprehenderit,
            debitis placeat suscipit nihil maiores ipsum tenetur velit ut
            accusantium error, voluptatem impedit.
          </p>
        </StyledDiaryBox>
        <StyledDiaryBox>
          <StyledTitleBox>
            <p>3 Jan 2024</p>
            <EditAndDelete />
          </StyledTitleBox>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            dolorum repudiandae temporibus autem a nobis soluta reprehenderit,
            debitis placeat suscipit nihil maiores ipsum tenetur velit ut
            accusantium error, voluptatem impedit.
          </p>
        </StyledDiaryBox>
      </StyledContainer>
    </>
  );
}

export default DiaryHome;
