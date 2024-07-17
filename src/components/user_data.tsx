"use client";

import React, { useState } from "react";
import UserBlock from "./user_block";
import { NextPage } from "next";
import { UserDataType } from "@/app/page";

const UserData = ({ dataProps }: { dataProps: UserDataType[] }) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <main className="min-h-screen bg-gray-100 w-screen">
        <div className="max-w-6xl mx-auto py-10">
          <h1 className="text-4xl text-gray-900 font-bold capitalize">
            User data
          </h1>

          <div className="grid grid-cols-3 gap-3 mt-5">
            {loading ? (
              <h1 className="text-4xl text-center text-gray-900 font-bold capitalize">
                Loading ...
              </h1>
            ) : (
              dataProps.map((data, index) => {
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

export default UserData;
