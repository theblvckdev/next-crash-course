"use client";

import UserBlock from "@/components/user_block";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface UserDataType {
  id: number;
  username: string;
  email: string;
}

const Home = () => {
  const [userData, setUserData] = useState<UserDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUserData: () => Promise<void> = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUserData(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  const data: Date = new Date();
  const fullYear: number = data.getFullYear();

  return (
    <>
      <main className="min-h-screen bg-gray-100 w-screen">
        <div className="max-w-6xl mx-auto py-10">
          <h1 className="text-4xl text-gray-900 font-bold capitalize">
            User data {fullYear}
          </h1>

          <div className="grid grid-cols-3 gap-3 mt-5">
            {loading ? (
              <h1 className="text-4xl text-center text-gray-900 font-bold capitalize">
                Loading ...
              </h1>
            ) : (
              userData.map((data, index) => {
                const { email, id, username } = data;

                return (
                  <UserBlock key={index} email={email} username={username} />
                );
              })
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
