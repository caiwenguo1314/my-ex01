import React, { createContext, useContext, useState, useEffect} from "react";

// 创建初始状态
const initialState = {
  current: 0,
  lifeAssured: {},
};

const InsuranceContext = createContext(initialState);

export function InsuranceProvider({ children }) {
  const [formState, setFormState] = useState(initialState);

  const nameData = [
    { name: "Jay Wong", inx: "0" },
    { name: "Lane Lou", inx: "1" },
    { name: "Stallia Wong Yanghe", inx: "2" },
  ];
  const [selectedData, setSelectedData] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const handleRadioChange = (value) => {
    setSelectedValues((prev) => {
      if (prev.includes(value)) {
        // 如果已选中，则取消选中
        return prev.filter((item) => item !== value);
      } else {
        // 如果未选中，则添加到选中列表
        return [...prev, value];
      }
    });
  };
  const addClickHandler = () => {
    setCurrent(formState.current + 1);
  };
  const subClickHandler = () => {
    setCurrent(formState.current - 1);
  };
  const setCurrent = (step) => {
    setFormState((prevState) => ({
      ...prevState,
      current: step,
    }));
  };

  const updateLifeAssured = (info) => {
    setFormState((prevState) => ({
      ...prevState,
      lifeAssured: info,
    }));
  };
  //获得1th里选择的卡片
  useEffect(() => {
    setSelectedData(
      nameData.filter((item) => selectedValues.includes(Number(item.inx)))
    );
  }, [selectedValues]);
  useEffect(() => {
    console.log("selectedData updated:", selectedData);
  }, [selectedData]);

  const submitInsurance = async () => {
    try {
      console.log("Submitting insurance data:", formState);
      return true;
    } catch (error) {
      console.error("Error submitting insurance:", error);
      return false;
    }
  };

  return (
    <InsuranceContext.Provider
      value={{
        formState,
        setCurrent,
        updateLifeAssured,
        submitInsurance,
        nameData,
        selectedValues,
        handleRadioChange,
        addClickHandler,
        subClickHandler,
        selectedData,
        setSelectedData,
      }}
    >
      {children}
    </InsuranceContext.Provider>
  );
}

export const useInsurance = () => {
  const context = useContext(InsuranceContext);
  if (!context) {
    throw new Error("useInsurance must be used within an InsuranceProvider");
  }
  return context;
};
