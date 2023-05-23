import React, {useEffect} from "react";

export const Test = () => {
  useEffect(() => {
    console.log(window.api.getRAM() * 30)
  }, []);
  return <div>Test</div>;
}