import React, { useState } from "react";

function useDebounce() {
  const [typingtimeout, settypingtimeout] = useState("");

  function debounce(fun, wait = 1000) {
    clearTimeout(typingtimeout);
    const timeout = setTimeout(() => fun(), wait);
    settypingtimeout(timeout);
  }
  return debounce;
}

export default useDebounce;
