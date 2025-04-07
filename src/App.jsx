import { Link, Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Stack, Paper, Typography } from "@mui/material";
import axios from "axios";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
import { GoSidebarCollapse } from "react-icons/go";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { useTheme } from "@mui/material/styles";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";

const App = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const theme = useTheme();

  const isActive = (path) => location.pathname === path;

  const isSubMenuActive = () =>
    ["talktime", "gameCards", "internet", "giftCard"].some((item) =>
      location.pathname.includes(item)
    );

  return (
    <Box sx={{ p: 2, boxSizing: "border-box", height: "Calc(100vh - 32px)" }}>
      <div style={{ display: "flex" }}>
        <Sidebar
          collapsed={collapsed}
          collapsedWidth="90px"
          style={{
            height: "Calc(100vh - 32px)",
            boxShadow: "0px 2px 3px 0px #0000001A",
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px",
              margin: "10px 0",
            }}
          >
            {!collapsed && <h2 style={{ fontStyle: "italic" }}>Dashboard</h2>}
            <button
              style={{ border: "none", outline: "none", background: "none" }}
            >
              {collapsed ? (
                <IconButton onClick={() => setCollapsed(!collapsed)}>
                  <GoSidebarCollapse
                    size={30}
                    color={collapsed ? "gray" : "gray"}
                  />
                </IconButton>
              ) : (
                <IconButton onClick={() => setCollapsed(!collapsed)}>
                  <TbLayoutSidebarLeftCollapse
                    size={33}
                    color={collapsed ? "#fff" : "gray"}
                  />
                </IconButton>
              )}
            </button>
          </div>
          <Menu>
            <Stack spacing={1}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <MenuItem
                  active={isActive("/")}
                  style={{
                    backgroundColor: isActive("/") ? "#FC2861" : "",
                    borderRadius: "6px",
                  }}
                  icon={
                    <RiDashboardHorizontalFill
                      size={30}
                      color={isActive("/") ? "#fff" : "gray"}
                    />
                  }
                >
                  <span
                    style={{
                      fontWeight: 500,
                      lineHeight: "21px",
                      color: isActive("/") ? "#ffffff" : "#969696",
                    }}
                  >
                    Dashboard
                  </span>
                </MenuItem>
              </Link>

              <Link to="/userList" style={{ textDecoration: "none" }}>
                <MenuItem
                  active={isActive("/userList")}
                  style={{
                    backgroundColor: isActive("/userList") ? "#FC2861" : "",
                    borderRadius: "6px",
                  }}
                  icon={
                    <FaUserGraduate
                      size={30}
                      color={isActive("/userList") ? "#fff" : "gray"}
                    />
                  }
                >
                  <span
                    style={{
                      fontWeight: 500,
                      lineHeight: "21px",
                      color: isActive("/userList") ? "#ffffff" : "#969696",
                    }}
                  >
                    userList
                  </span>
                </MenuItem>
              </Link>

              {/* Submenu Example */}
              <SubMenu
                label="Products"
                style={{
                  backgroundColor: isSubMenuActive() ? "#FC2861" : "",
                  color: isSubMenuActive() ? "#ffffff" : "#969696",
                  fontWeight: 500,
                  lineHeight: "21px",
                  borderRadius: "8px",
                }}
                icon={
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.21 7.90502L12.51 12.365C12.2 12.545 11.81 12.545 11.49 12.365L3.78997 7.90502C3.23997 7.58502 3.09997 6.83502 3.51997 6.36502C3.80997 6.03502 4.13997 5.76502 4.48997 5.57502L9.90997 2.57502C11.07 1.92502 12.95 1.92502 14.11 2.57502L19.53 5.57502C19.88 5.76502 20.21 6.04502 20.5 6.36502C20.9 6.83502 20.76 7.58502 20.21 7.90502Z"
                      fill={isSubMenuActive() ? "#ffffff" : "#969696"}
                    />
                    <path
                      d="M11.43 14.225V21.045C11.43 21.805 10.66 22.305 9.97998 21.975C7.91998 20.965 4.44998 19.075 4.44998 19.075C3.22998 18.385 2.22998 16.645 2.22998 15.215V10.055C2.22998 9.26502 3.05998 8.76502 3.73998 9.15502L10.93 13.325C11.23 13.515 11.43 13.855 11.43 14.225Z"
                      fill={isSubMenuActive() ? "#ffffff" : "#969696"}
                    />
                    <path
                      d="M12.57 14.225V21.045C12.57 21.805 13.34 22.305 14.02 21.975C16.08 20.965 19.55 19.075 19.55 19.075C20.77 18.385 21.77 16.645 21.77 15.215V10.055C21.77 9.26502 20.94 8.76502 20.26 9.15502L13.07 13.325C12.77 13.515 12.57 13.855 12.57 14.225Z"
                      fill={isSubMenuActive() ? "#ffffff" : "#969696"}
                    />
                  </svg>
                }
              >
                {["talktime", "gameCards", "internet", "giftCard"].map(
                  (item) => (
                    <MenuItem
                      key={item}
                      active={location.pathname.includes(item)}
                      style={{
                        borderLeft: location.pathname.includes(item)
                          ? "2px solid #FC2861"
                          : "",
                        color: location.pathname.includes(item)
                          ? "#FC2861"
                          : "#969696",
                        fontWeight: 500,
                        lineHeight: "21px",
                      }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </MenuItem>
                  )
                )}
              </SubMenu>
            </Stack>
          </Menu>
          <div
            style={{
              height: "57px",
              padding: "11px",
              position: "absolute",
              gap: collapsed ? "5px" : "10px",
              bottom: "0px",
            }}
          >
            {!collapsed && (
              <h5
                style={{
                  lineHeight: "21px",
                  color: "#2D2D2D",
                }}
              >
                hasanHridoy@gmail.com
              </h5>
            )}
          </div>
        </Sidebar>
        <main
          style={{
            flex: 1,
            padding: "0px 10px",
            width: collapsed ? "Calc(100% - 90px)" : "Calc(100% - 250px)",
            transition: collapsed && "width 500ms",
            overflow: "auto",
            height: "Calc(100vh - 32px)",
          }}
        >
          <Outlet />
        </main>
      </div>
    </Box>
  );
};

export default App;
