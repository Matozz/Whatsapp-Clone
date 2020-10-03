import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, IconButton } from "@material-ui/core";

import "./SidebarChat.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import db from "../../../firebase";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const creatChat = () => {
    const roomName = prompt("Please Enter The Name For Chat!");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat_info">
          <div className="sidebarChat_info_detail">
            <h2>{name}</h2>
            <p>{messages[0]?.message}</p>
          </div>
          <IconButton className="sidebarChat_info_delete">
            <HighlightOffIcon />
          </IconButton>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat" onClick={creatChat}>
      <div className="sidebarChat_add">
        <h2>Add new Chat</h2>
      </div>
    </div>
  );
}

export default SidebarChat;
