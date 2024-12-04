export const api_key = "AIzaSyANEwI9MY6Dnabr0GrnTJdiPcN0c2Kq_WA";
export const value_convertor = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
