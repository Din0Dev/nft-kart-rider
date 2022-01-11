import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = (props) => {
  const authReducer = useSelector((state) => state.authReducer);

  const isLogin = authReducer?.auth?.isLogin;

  return (
    <div className="header">
      <div className="fix-size">
        <div className="nav-mobile">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div>
              <ul>
                <li className="nav-item active">
                  <Link href="/">
                    <a className="nav-link home-title" href="#">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/whitepaper">
                    <a className="nav-link whitepaper-title" href="#">
                      White Paper
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/news">
                    <a className="nav-link news-title" href="#">
                      Tin Tức
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link contact-title" href="#">
                    Liên Hệ
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="btn-play">
          <img src="/static/assets/img/Button-frames/btn-play.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
