import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Container from "@mui/material/Container";

export default function LatteArtGallery() {
  return (
    <Container
      sx={{
        display: "fixed",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "150vh",
      }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

const itemData = [
  {
    img: "/Latte-Art/bear1.png",
    title: "latte1",
  },

  {
    img: "/Latte-Art/rosetta.png",
    title: "latte2",
  },
  {
    img: "/Latte-Art/rosetta1.png",
    title: "latte3",
  },

  {
    img: "/Latte-Art/stacked-leaf.png",
    title: "latte4",
  },

  {
    img: "/Latte-Art/tulip.png",
    title: "latte5",
  },

  {
    img: "/Latte-Art/tulips.png",
    title: "latte6",
  },
];
