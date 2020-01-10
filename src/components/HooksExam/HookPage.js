import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppContainer from "../system/AppContainer";

export default function HookPage(props) {
  // const [state, setState] = useState({ loginUser: "ümit", name: "", show: false });
  const [count, setCount] = useState(0);
  const app = useSelector(state => state.login);
  const dispatch = useDispatch();

  function setCountUp(e) {
    setCount(count + 1);
  }
  function setCountDown(e) {
    setCount(count - 1);
  }

  function updateReduxObject() {
    // LoginAction('Login','ümitss')
    dispatch({ loginUser: "state.loginUser", type: "Login" });
    console.log(props);
  }

  return (
    <AppContainer>
      <div>
        <p>{count} defa tıklama işlemi yapıldı.</p>
        <button onClick={setCountUp}>Arttır</button>
        <button onClick={setCountDown}>Azalt</button>
        {app.loginUser == null || app.loginUser == "" ? (
          <button onClick={updateReduxObject}>Login</button>
        ) : (
          <p>{app.loginUser}</p>
        )}
        <p>{props.Came}</p>
      </div>
    </AppContainer>
  );
}
