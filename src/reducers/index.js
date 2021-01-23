import GalleryCard from "../Components/GalleryCard";
import ListCard from "../Components/ListCard";
import TextCard from "../Components/TextCard";
import Welcome from "../Components/Welcome";
var value = <Welcome />;
const counter = (state = 0, action) => {
  console.log(action, "ACTION");

  switch (action.type) {
    case "TEXT":
      return <TextCard />;

    case "TWEETS":
      state++;
      return <ListCard />;
    case "GALLERY":
      return <GalleryCard />;
  }
};

export default counter;
