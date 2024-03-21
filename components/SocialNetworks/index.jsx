import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";
import { AiFillWechat, AiFillGitlab, AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

import ScreenEgg from "../ScreenEgg";

const socialNetworks = [
  {
    id: 1,
    href: "https://instagram.com",
    icon: RiInstagramFill,
  },
  {
    id: 2,
    href: "https://instagram.com",
    icon: FaTelegramPlane,
  },
  {
    id: 3,
    href: "https://instagram.com",
    icon: IoLogoWhatsapp,
  },
];

const SocialNetworks = ({ className }) => {
  return (
    <ScreenEgg type="left">
      <div>
        <ul className={cl(className, styles.list)}>
          {socialNetworks.map((socialNetwork) => (
            <li key={socialNetwork.id} className={styles.listItem}>
              <a
                href={socialNetwork.href}
                target="_blank"
                className={styles.listLink}
                rel="noreferrer"
              >
                {React.createElement(socialNetwork.icon, {
                  color: "black",
                  size: 50,
                })}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </ScreenEgg>
  );
};

export default SocialNetworks;
