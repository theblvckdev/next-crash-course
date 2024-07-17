import Link from "next/link";
import React from "react";

interface ComponentProps {
  username: string;
  email: string;
  userId?: number;
}

// function type: () => void
// string, undefined, number, boolean, any (not advicable), unknown

const UserBlock = ({ username, userId, email }: ComponentProps) => {
  return (
    <>
      <Link href={"/"}>
        <div className="p-3 rounded-md ring-1 ring-gray-100 bg-white shadow-md">
          <div className="flex gap-3 items-center">
            <div className="h-[40px] w-[40px] rounded-full overflow-hidden bg-gray-100"></div>
            <div>
              <h4 className="text-gray-900 font-semibold text-sm">
                {username}
              </h4>
              <div className="text-gray-400 text-sm">email: {email}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default UserBlock;
