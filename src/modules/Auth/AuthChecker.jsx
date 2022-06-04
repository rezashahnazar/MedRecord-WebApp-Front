import { useEffect, useState } from "react";
import {
  useStoreActions,
  //  useStoreState
} from "easy-peasy";
import axios from "axios";
import Cookies from "universal-cookie";

const AuthChecker = () => {
  const setGlogged = useStoreActions((actions) => actions.setGlogged);
  // const gUserData = useStoreState((state) => state.gUserData);
  const addGUserData = useStoreActions((actions) => actions.addGUserData);

  const [trigger, setTrigger] = useState(false);
  const [logged, setLogged] = useState(false);

  const [cookiePhone, setCookiePhone] = useState("");
  const [cookieAccess, setCookieAccess] = useState("");
  const [cookieRefresh, setCookieRefresh] = useState("");
  const [newAccess, setNewAccess] = useState("");
  const [cookieIsRead, setCookieIsRead] = useState(false);
  const [tryRefresh, setTryRefresh] = useState(false);
  const [userData, setUserData] = useState({});

  const deleteTotalCookie = () => {
    const cookies = new Cookies();
    cookies.remove("zi_i", { path: "/" });
  };

  useEffect(() => {
    setTrigger(true);
  }, []);

  // const handleLogOut = () => {
  //   deleteTotalCookie();
  //   window.location.reload(true);
  // };

  useEffect(() => {
    if (trigger === true) {
      const cookies = new Cookies();
      if (cookies.get("zi_i")) {
        let cookie_phone = JSON.parse(decodeURI(cookies.get("zi_i")));
        if (typeof cookie_phone === "object") {
          setCookiePhone(cookie_phone.id);
          setCookieAccess(cookie_phone.acc);
          setCookieRefresh(cookie_phone.ref);
          setCookieIsRead(true);
        } else {
          deleteTotalCookie();
          window.location.reload(true);
        }
      } else {
        setTrigger(false);
        setLogged(false);
      }
    }
  }, [trigger]);

  const deleteCookieAccess = () => {
    if (cookiePhone && cookieRefresh) {
      let user_info_none = encodeURI(
        JSON.stringify({ id: cookiePhone, acc: "", ref: cookieRefresh })
      );
      const cookies2 = new Cookies();
      cookies2.set("zi_i", user_info_none, {
        path: "/",
        sameSite: true,
        expires: new Date(Date.now() + 10031536000000),
      });
    }
  };
  useEffect(() => {
    if (cookiePhone && cookieRefresh && newAccess.length > 1) {
      let user_info_none = encodeURI(
        JSON.stringify({ id: cookiePhone, acc: newAccess, ref: cookieRefresh })
      );
      const cookies3 = new Cookies();
      cookies3.set("zi_i", user_info_none, {
        path: "/",
        sameSite: true,
        expires: new Date(Date.now() + 10031536000000),
      });
      setTrigger(true);
    }
  }, [newAccess, cookiePhone, cookieRefresh]);

  // Adding User Profile Data to Global State
  useEffect(() => {
    if (userData) {
      addGUserData(userData);
    }
  }, [userData, addGUserData]);

  useEffect(() => {
    if (logged) {
      setGlogged(logged);
    }
  }, [logged, setGlogged]);

  const isLogged = () => {
    setTrigger(false);
    axios
      .get(
        "https://auth.zidoctor.com/gateway/users/user/retrieve/" + cookiePhone,
        {
          headers: {
            Authorization: `Bearer ${cookieAccess}`,
          },
        }
      )
      .then((Response) => {
        setUserData(Response.data);
        setLogged(true);
        // console.log("Access OK");
      })
      .catch((error) => {
        if (error.request?.status === 401) {
          deleteCookieAccess();
          setCookieAccess("");
          setTryRefresh(true);
          // console.log("Access Unautherized");
        } else {
          deleteTotalCookie();
          window.location.reload(true);
        }
      });
  };

  // eslint-disable-next-line
  useEffect(() => {
    if (trigger && cookieIsRead) {
      if (cookiePhone.length > 0 && cookieAccess.length > 0 && !logged) {
        isLogged();
      } else {
        setTrigger(false);
        setCookieIsRead(false);
      }
    }
  });

  useEffect(() => {
    if (tryRefresh === true) {
      setTryRefresh(false);
      // console.log("Trying Refresh");
      axios
        .post("https://auth.zidoctor.com/api/users/login/refresh", {
          refresh: cookieRefresh,
        })
        .then((Response) => {
          setCookieAccess(Response.data.token.value.access);
          setNewAccess(Response.data.token.value.access);
          // console.log("New Access token set");
        })
        .catch((error) => {
          console.log(error);
          setCookieAccess("");
          setCookiePhone("");
          setCookieRefresh("");
          setLogged(false);
          // console.log("Refresh failed");
          deleteTotalCookie();
          window.location.reload(true);
        });
    }
  }, [tryRefresh, cookieRefresh]);

  return <></>;
};

export default AuthChecker;
