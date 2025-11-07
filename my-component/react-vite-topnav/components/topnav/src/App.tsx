import React, { memo, useState } from "react";
// import { type InitialData } from "oc-server/client";
import "../../../globals.css";

// interface Pillar {
//   href: string;
//   name: string;
//   label: string;
//   imgSrcActive: string;
//   imgSrcNonActive: string;
// }

const TopNav = ({
  showSearch = true,
  isActive = "games",
  onClickSearch,
  pageScrolled = false,
  pillars = [],
}) => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const handleIsActive = (type: string) => {
    const isHome = isActive === "home";
    const activePage = isHome ? isActive : isActive + "+";
    return type.toLowerCase() === activePage;
  };

  const handleClick = (href: string) => {
    window.location.href = href;
  };

  const moreIcon =
    "https://je-es.rctiplus.com/dev-micro-fe/a2f6dfb11de6197ab55bc79e445a49f0.png";
  const closeIcon =
    "https://je-es.rctiplus.com/dev-micro-fe/e4c97203363d2eb890f2eee0a8383ccc.png";
  const searchIcon =
    "https://je-es.rctiplus.com/dev-micro-fe/4dfdede3df66fb4f1001428f707b074c.png";
  const logo =
    "https://je-es.rctiplus.com/dev-micro-fe/bcde962dd480fe0b703b38a5a1197fde.png";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex flex-wrap px-2.5 py-[15px] transition-all duration-300 ${
          pageScrolled
            ? "bg-[rgba(40,40,40,0.6)] backdrop-blur-sm"
            : "bg-gradient-to-b from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.5)] to-transparent"
        }`}
      >
        {/* Logo & Search */}
        {showSearch && (
          <div className="flex justify-between w-full">
            <a href="/">
              <img src={logo} width={72} height={24} alt="RCTI+" />
            </a>
            <img
              src={searchIcon}
              alt="Search"
              className="w-6 h-6 cursor-pointer"
              onClick={onClickSearch}
            />
          </div>
        )}

        {/* Pillar Menu */}
        <div
          className={`flex justify-between w-full items-center ${
            showSearch ? "pt-[15px]" : ""
          }`}
        >
          {pillars.slice(0, 5).map((item, i) => (
            <div
              key={i}
              className="w-14 h-5 flex justify-center items-center cursor-pointer"
              onClick={() => handleClick(item.href)}
            >
              <img
                src={
                  handleIsActive(item.name === "ALL" ? "home" : item.name)
                    ? item.imgSrcActive
                    : item.imgSrcNonActive
                }
                alt={item.name}
                className="h-4 object-contain"
              />
            </div>
          ))}

          {/* More Button */}
          <div
            className="w-14 h-5 flex justify-center items-center cursor-pointer"
            onClick={() => setShowMoreMenu(true)}
          >
            <img src={moreIcon} alt="More" className="w-6 h-6" />
          </div>
        </div>
      </nav>

      {/* More Menu Overlay */}
      {showMoreMenu && (
        <div className="fixed inset-0 w-full h-full bg-[rgba(2,2,2,0.8)] text-white z-50">
          <div className="flex justify-end p-4">
            <img
              src={closeIcon}
              alt="Close"
              className="w-5 h-5 cursor-pointer"
              onClick={() => setShowMoreMenu(false)}
            />
          </div>

          <div className="grid place-items-center h-full gap-4">
            {pillars.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => handleClick(item.href)}
              >
                <img
                  src={item.imgSrcActive}
                  alt={item.name}
                  className="h-6 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default memo(TopNav);
