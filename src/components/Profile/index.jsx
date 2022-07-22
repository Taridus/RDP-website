import React from "react";
import { Profile } from "./style";
import iconKing from "../../assets/kingIcon.png";
import iconImp from "../../assets/impIcon.png";
import avatarImp from "../../assets/impAvatar.png";
import avatarKing from "../../assets/kingAvatar.png";

const ProfileCard = ({ name }) => {
  return (
    <Profile>
      <h6>{name}</h6>
      <div
        className="profile-container"
        data-aos={name == "king" ? "fade-right" : "fade-left"}
      >
        <div className="profile-container__icon">
          <img src={name == "king" ? iconKing : iconImp} alt="" />
        </div>
        <img
          src={name == "king" ? avatarKing : avatarImp}
          alt=""
          className="avatar"
        />
        <div className="profile-container__outsideName">
          <span>{name}</span>
        </div>
      </div>
    </Profile>
  );
};

export default ProfileCard;
