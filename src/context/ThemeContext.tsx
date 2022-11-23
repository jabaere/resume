import { createContext, useState,useEffect} from "react";

interface IThemeContext {
  hexColorOne: string;
  hexColorTwo: string;
  color1: string;
  color2: string;
  handleColorOne?: (e: string) => void;
  handleColorTwo?: (e: string) => void;
  reloadAndSave?: () => void;
  reset?: () => void;
  resize:boolean
}

const defaultState = {
  hexColorOne: "",
  hexColorTwo: "",
  color1: localStorage.getItem("hexColorOne") || "#101820FF",
  color2: localStorage.getItem("hexColorTwo") || "#20A161",
  resize:false
};

const ThemeContext = createContext<IThemeContext>(defaultState);

export const ThemeProvider = (props: any) => {
  const [hexColorOne, setHexColorOne] = useState(defaultState.hexColorOne);
  const [hexColorTwo, setHexColorTwo] = useState(defaultState.hexColorTwo);
  const [color1, setColor1] = useState(defaultState.color1);
  const [color2, setColor2] = useState(defaultState.color2);
  const [resize,setResize] = useState(defaultState.resize)

  useEffect(()=> {
    window.addEventListener('resize', () => setResize(true))
  })

  const handleColorOne = (color: string) => {
    setHexColorOne(color);
  };

  const handleColorTwo = (color: string) => {
    setHexColorTwo(color);
  };

  const reloadAndSave = () => {
    setColor1(hexColorOne);
    setColor2(hexColorTwo);
    localStorage.setItem("hexColorTwo", hexColorTwo);
    localStorage.setItem("hexColorOne", hexColorOne);
  };



  const reset = () => {
    localStorage.setItem("hexColorTwo", "#20A161");
      localStorage.setItem("hexColorOne", "#101820FF");
      setColor1("#101820FF");
      setColor2("#20A161");
   
  };

  return (
    <ThemeContext.Provider
      value={{
        hexColorOne,
        hexColorTwo,
        handleColorOne,
        handleColorTwo,
        reloadAndSave,
        reset,
        color1,
        color2,
        resize
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
