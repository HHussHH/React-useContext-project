import UserContext from "../context/UserContext";
import { useContext, useState } from "react";

const ChangeUser = () => {
  const { setUser } = useContext(UserContext);
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="type new name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setUser(text)}>Change User</button>
    </>
  );
};

export default ChangeUser;
