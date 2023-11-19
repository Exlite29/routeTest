import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Account } from "./Account";
import { Settings } from "./Settings";
import { Testing } from "./Testing";

const PATHS = [
  {
    path: "account",
    label: "Account",
  },
  {
    path: "settings",
    label: "Settings",
  },
  {
    path: "testing",
    label: "Testing",
  },
];
const UserProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (pathname: string) => {
    navigate(`/profile/${pathname}`);
  };

  return (
    <div className="flex top-0">
      <h1>UserProfile</h1>

      {PATHS.map(({ path, label }, i) => (
        <button
          key={i}
          className={`${
            location.pathname.includes(path) ? "color-black" : "color-blue"
          }`}
          onClick={() => handleNavigate(path)}
        >
          {label}
        </button>
      ))}

      <Routes>
        <Route path="account" element={<Account />} />
        <Route path="settings" element={<Settings />} />
        <Route path="testing" element={<Testing />} />
      </Routes>
    </div>
  );
};

export default UserProfile;
