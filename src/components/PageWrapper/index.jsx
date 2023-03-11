import { Container } from "@mui/material";
import { styled } from "@mui/system";

const PageWrap = styled("div")({
  paddingTop: "10px",
});

const PageWrapper = ({ children }) => {
  return (
    <PageWrap>
      <Container>{children}</Container>
    </PageWrap>
  );
};

export default PageWrapper;
