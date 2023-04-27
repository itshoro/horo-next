function debounce<TArgs extends any[]>(
  callback: (...args: TArgs) => void,
  ms: number
) {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: TArgs) => {
    if (timeoutId !== null) {
      console.log("debounded");
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => callback.apply(window, args), ms);
  };
}

export { debounce };
