import React from "react";
import { Profile } from "./style";
import iconKing from "../../assets/kingIcon.png";
import iconImp from "../../assets/impIcon.png";
import avatarImp from "../../assets/impAvatar.png";
import avatarKing from "../../assets/kingAvatar.png";

const ProfileCard = ({ name }) => {
  const discordId = {
    imp: {
      id: 255015900363620352,
    },
    king: {
      id: 649793871693479956,
    },
  };
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
        <div className="profile-container__social">
          <a
            href="https://www.instagram.com/kingninja_oficial/"
            target="_blank"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a
            href={`https://discord.com/users/${
              name == "king" ? discordId.king.id : discordId.imp.id
            }`}
            target="_blank"
          >
            <i className="bx bxl-discord-alt"></i>
          </a>
        </div>
        <div className="profile-container__outsideName">
          <span>{name}</span>
        </div>
      </div>
    </Profile>
  );
};

export default ProfileCard;
