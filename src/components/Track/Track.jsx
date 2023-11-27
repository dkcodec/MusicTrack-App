import style from "./track.module.scss";
import { IconButton } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import secondsToMtS from "../../utils/secondsToMtS";

const Track = (track) => {
  const { id, src, preview, title, artist, duration } = track;
  const formatedDuration = secondsToMtS(duration);

  return (
    <div className={style.track}>
      <IconButton>
        <PlayArrow />
      </IconButton>
      <img className={style.preview} src={preview} alt="track_image" />
      <div className={style.credits}>
        <b>{title}</b>
        <p>{artist}</p>
      </div>
      <p>{formatedDuration}</p>
    </div>
  );
};

export default Track;
