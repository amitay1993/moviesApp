import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  large: {
    margin: theme.spacing(2),
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Avatar
      alt="Remy Sharp"
      src="/static/images/avatar/1.jpg"
      className={classes.large}
    />
  );
}
