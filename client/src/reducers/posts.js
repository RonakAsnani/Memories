import { CardActions } from "@material-ui/core";

export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_POST":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
