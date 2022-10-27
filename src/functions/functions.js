import axios from "axios";

const allRockets = async (state) => {
  const httpRequest = await axios.get("https://api.spacexdata.com/v3/capsules");
  state(httpRequest.data);
};

export {allRockets}