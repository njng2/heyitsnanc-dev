import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Container from "@mui/material/Container";

export default function BrownieGallery() {
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
    img: "/PetGallery-Pics/Brownie/airplane-ears.png",
    title: "Brownie1",
  },

  {
    img: "/PetGallery-Pics/Brownie/guilty.png",
    title: "Brownie3",
  },
  {
    img: "/PetGallery-Pics/Brownie/bandana.png",
    title: "Brownie2",
  },

  {
    img: "/PetGallery-Pics/Brownie/happy.png",
    title: "Brownie4",
  },

  {
    img: "/PetGallery-Pics/Brownie/headband.png",
    title: "Brownie5",
  },
];
