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
  // 1. STATE INITIALIZATION (Empty arrays as starting point)
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("pc_user");
    return saved ? JSON.parse(saved) : null;
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

  // 2. PERSISTENCE
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

  // 3. DYNAMIC STATS (Calculated purely from real records)
  const stats = useMemo(() => {
    const todayStr = getDateOffset(0);
    const yesterdayStr = getDateOffset(1);
    return {
      todayCount: records.filter((r) => r.date === todayStr).length,
      yesterdayCount: records.filter((r) => r.date === yesterdayStr).length,
    };
  }, [records]);

  // 4. ACTIONS
  const login = (username, role) => {
    setUser({
      username,
      role,
      name:
        username.split(/[._@]/)[0].charAt(0).toUpperCase() +
        username.split(/[._@]/)[0].slice(1),
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("pc_user");
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
