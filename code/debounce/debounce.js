import useDebounce from "./useDebounce";

const delay = 500;

const debounce = (fn, delay) => {
  let timeoutId;

  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

// step 1
const doSearch = async (params) => {};
const handler = (params) => {
  doSearch(params);
};
const debounceHandler = debounce(handler, delay); // use in onChange: debounceHandler

// step 2
const doSearch2 = useDebounce(() => {
  console.log("main handler");
}, delay);
const handleSearch = (param) => {
  doSearch(term);
}; // use in onChange: (e) => handleSearch(e.target.value)
