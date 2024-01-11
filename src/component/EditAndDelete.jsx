import styled from "styled-components";

const StyledButtonBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledIcon = styled.i`
  transition: all 0.2s ease;

  &:hover {
    color: #bdbdbd;
  }
`;

function EditAndDelete() {
  return (
    <StyledButtonBox>
      <button>
        <StyledIcon className="fa-solid fa-pen-to-square"></StyledIcon>
      </button>
      <button>
        <StyledIcon className="fa-solid fa-trash"></StyledIcon>
      </button>
    </StyledButtonBox>
  );
}

export default EditAndDelete;
