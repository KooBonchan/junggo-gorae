import { Grid2 } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// styled 컴포넌트 정의
const WeeklyBestContainer = styled(Box)({
  width: "100%",
  backgroundColor: "grey.200",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 2,
  flexDirection: "column",
  padding: 2,
});

const WeeklyBestTitle = styled(Typography)({
  color: "black",
  fontWeight: "bold",
});

const ProductCard = styled(Box)({
  width: "100%",
  height: 400,
  backgroundColor: "grey.200",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 2,
  flexDirection: "column",
  padding: 2,
});

const ImageContainer = styled(Box)({
  width: "100%",
  height: "60%",
  backgroundColor: "lightgray",
  borderRadius: 2,
  marginBottom: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const TitlePriceContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: 1,
});

const ProductTitle = styled(Typography)({
  fontWeight: "bold",
});

const ProductPrice = styled(Typography)({
  fontWeight: "bold",
});

const ProductDescription = styled(Typography)({
  color: "text.secondary",
  textAlign: "left",
});

export default function WeeklyBestGallery() {
  return (
    <WeeklyBestContainer>
      <WeeklyBestTitle variant="h3">Weekly Best</WeeklyBestTitle>

      {/* Weekly Best 박스를 4칸 3줄로 배치 */}
      <Grid2 container spacing={2} sx={{ marginTop: 3 }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <ProductCard>
              {/* 이미지 박스 */}
              <ImageContainer>
                <img
                  src="image_url_here"
                  alt={`product ${index + 1}`}
                  style={{ width: "100%", height: "auto", borderRadius: 4 }}
                />
              </ImageContainer>

              {/* 제목과 가격이 가로로 나란히 배치된 div */}
              <TitlePriceContainer>
                <ProductTitle variant="h6">
                  제품 제목 {index + 1}
                </ProductTitle>
                <ProductPrice variant="h6">$ 가격</ProductPrice>
              </TitlePriceContainer>

              {/* 제품 소개 내용 */}
              <ProductDescription variant="body2">
                제품 소개 내용 {index + 1}이 여기에 들어갑니다. 이 제품은 매우
                유용하고 고품질입니다. 다양한 기능과 이점을 제공합니다.
              </ProductDescription>
            </ProductCard>
          </Grid2>
        ))}
      </Grid2>
    </WeeklyBestContainer>
  );
}