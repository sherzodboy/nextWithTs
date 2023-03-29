import "react-multi-carousel/lib/styles.css";
import { Avatar, Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import { format } from "date-fns";

const Hero = () => {
  return (
    <Box width={"100%"} height={"70vh"} sx={{ backgroundColor: "red" }}>
      <Carousel
        responsive={{
          mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
          },
        }}
      >
        {data.map((item) => (
          <Box key={item.image}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "70vh",
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
              />
            </Box>
            <Box
              width={{ xs: "100%", sm: "70%" }}
              position={"relative"}
              color={"white"}
              sx={{
                top: "50%",
                transform: "translateY(-200%)",
                paddingLeft: { xs: "10px", sm: "50px" },
              }}
              zIndex={999}
            >
              <Typography variant="h2">{item.title}</Typography>
              <Typography variant="h5">{item.exerpt}</Typography>
              <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                <Avatar alt={item.author.name} src={item.author.image} />
                <Box>
                  <Typography>{item.author.name}</Typography>
                  <Box>{format(new Date(), "dd MMM yyyy")}</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;

const data = [
  {
    image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
    title: "Technical Seo with Hygraph",
    exerpt:
      "Get started with your SEO implementation when using a Headless CMS",
    author: {
      name: "Sherzod Boy",
      image:
        "https://docs.google.com/document/d/1NrB4uhfgIkDw8mqRHyVdKLiAsHwpfG4t85dKllxpH58/edit",
    },
  },
  {
    image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
    title: "Union Types and Sortable Relations with Hygraph",
    exerpt:
      "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
    author: {
      name: "Sherzod Boy",
      image:
        "https://docs.google.com/document/d/1NrB4uhfgIkDw8mqRHyVdKLiAsHwpfG4t85dKllxpH58/edit",
    },
  },
];
