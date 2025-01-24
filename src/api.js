import axios from "axios";

// Function to fetch contests from Codeforces API
export const fetchCodeforcesContests = async () => {
  try {
    const response = await axios.get(
      "https://codeforces.com/api/contest.list/"
    );
    return response.data.result; // Return the list of contests
  } catch (error) {
    console.error("Error fetching Codeforces contests", error);
  }
};
