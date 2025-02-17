import React from "react";
import Slider from "react-slick";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Project 1",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourusername/project2",
  },
  {
    title: "Project 3",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourusername/project3",
  },
];

const ProjectCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <Card key={index} sx={{ maxWidth: 345, margin: "auto" }}>
          <CardActionArea href={project.link} target="_blank">
            <CardMedia component="img" height="200" image={project.image} alt={project.title} />
            <CardContent>
              <Typography variant="h6" textAlign="center">{project.title}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Slider>
  );
};

export default ProjectCarousel;
