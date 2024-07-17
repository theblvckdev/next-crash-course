import UserBlock from "@/components/user_block";
import axios from "axios";
import UserData from "@/components/user_data";

export interface UserDataType {
  id: number;
  username: string;
  email: string;
}

const getUserData = async () => {
  try {
    const { data, status } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (status === 200) return data;
  } catch (err) {
    console.log(err);
  }
};

const Home = async () => {
  const response: UserDataType[] = await getUserData();

  const data: Date = new Date();
  const fullYear: number = data.getFullYear();

  return <UserData dataProps={response} />;
};

export default Home;
