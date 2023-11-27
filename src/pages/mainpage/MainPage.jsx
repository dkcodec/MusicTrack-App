import trackList from "../../assets/trackList";
import style from "./mainPage.module.scss";
import Track from "../../components/Track/Track";
import { Input } from "@mui/material";

const MainPage = () => {
  const handleCahnge = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className={style.search}>
      <Input
        className={style.input}
        placeholder="Search track"
        onChange={handleCahnge}
      ></Input>
      <div className={style.list}>
        {trackList.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
