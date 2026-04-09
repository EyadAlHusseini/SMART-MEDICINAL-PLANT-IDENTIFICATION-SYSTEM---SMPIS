import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";

const DataContext = createContext();

const getDateOffset = (days) => {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

export function DataProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("pc_user");
    return saved ? JSON.parse(saved) : null;
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("pc_theme") || "light";
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("pc_lang") || "English";
  });

  const [records, setRecords] = useState(() => {
    const saved = localStorage.getItem("pc_records");
    return saved ? JSON.parse(saved) : [];
  });

  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("pc_employees");
    return saved ? JSON.parse(saved) : [];
  });

  const [activities, setActivities] = useState(() => {
    const saved = localStorage.getItem("pc_activities");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("pc_theme", theme);
    const root = window.document.documentElement;
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("pc_lang", language);
  }, [language]);
  useEffect(() => {
    localStorage.setItem("pc_user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    localStorage.setItem("pc_records", JSON.stringify(records));
  }, [records]);
  useEffect(() => {
    localStorage.setItem("pc_employees", JSON.stringify(employees));
  }, [employees]);
  useEffect(() => {
    localStorage.setItem("pc_activities", JSON.stringify(activities));
  }, [activities]);

  const stats = useMemo(() => {
    const todayStr = getDateOffset(0);
    const yesterdayStr = getDateOffset(1);
    return {
      todayCount: records.filter((r) => r.date === todayStr).length,
      yesterdayCount: records.filter((r) => r.date === yesterdayStr).length,
    };
  }, [records]);

  const login = (username, password, role) => {
    setUser({
      username,
      password,
      role,
      name:
        username.split(/[._@]/)[0].charAt(0).toUpperCase() +
        username.split(/[._@]/)[0].slice(1),
      avatar: null,
      email: `${username.toLowerCase()}@organization.com`,
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("pc_user");
  };

  const updateUser = (newData) => {
    setUser((prev) => ({ ...prev, ...newData }));
  };

  const addNewClassification = (plantName, confidence, imageUrl) => {
    const newId = Date.now();
    const newRecord = {
      id: newId,
      name: plantName,
      confidence,
      user: user?.name || "User",
      date: getDateOffset(0),
      img: imageUrl,
    };
    const newActivity = {
      id: newId,
      name: user?.name || "User",
      action: `Classified ${plantName}`,
      time: "Just now",
      type: "success",
    };
    setRecords((prev) => [newRecord, ...prev]);
    setActivities((prev) => [newActivity, ...prev]);
  };

  const addNewEmployee = (employeeData) => {
    const newEmployee = {
      id: Date.now(),
      ...employeeData,
      active: "Just now",
      online: false,
    };
    setEmployees((prev) => [newEmployee, ...prev]);
  };

  return (
    <DataContext.Provider
      value={{
        user,
        login,
        logout,
        updateUser,
        theme,
        setTheme,
        language,
        setLanguage,
        records,
        activities,
        employees,
        stats,
        addNewClassification,
        addNewEmployee,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
