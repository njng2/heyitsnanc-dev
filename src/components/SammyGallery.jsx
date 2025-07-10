import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Container from "@mui/material/Container";

export default function SammyGallery() {
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
    img: "/PetGallery-Pics/Sammy/Loaf.png",
    title: "Sammy1",
  },

  {
    img: "/PetGallery-Pics/Sammy/loaf2.png",
    title: "Sammy2",
  },
  {
    img: "/PetGallery-Pics/Sammy/peeping.png",
    title: "Sammy3",
  },

  {
    img: "/PetGallery-Pics/Sammy/sammy.png",
    title: "Samym4",
  },

  {
    img: "/PetGallery-Pics/Sammy/sammy2.png",
    title: "Sammy5",
  },
];
