import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { CenteredBox } from "../styles/componentStyles/centeredBox";
import GitHubIcon from "@mui/icons-material/GitHub";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

export default function TitlebarImageList({ array, onClick, img }) {
  return (
    <CenteredBox>
      <ImageList sx={{ width: 800, height: 450 }}>
        <ImageListItem cols={2} />
        {array.map((item) => (
          <ImageListItem key={item.url} sx={{ marginRight: "20px" }}>
            <img
              src={item.url}
              srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.url}
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
            <ImageListItemBar
              title={img == item.url ? "Selected" : "Select"}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about `}
                  onClick={() => onClick(item.url)}
                >
                  {img == item.url ? (
                    <CheckBoxIcon />
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </CenteredBox>
  );
}

const itemData = [
  {
    img: "https://i.postimg.cc/y8Gw4Q3t/pexels-vecislavas-popa-1571458.jpg",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
];
