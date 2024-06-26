import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import TweetBox from "./TweetBox";

function Feed() {
  return (
    <div className="col-span-7 lg:col-span-5 border-x">
      <div className="flex items-center  justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Feed</h1>
        <ArrowPathIcon className="w-8 h-8 mr-5 mt-5 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
      {/* TWEET BOX */}
      <div>
        <TweetBox />
      </div>
    </div>
  );
}

export default Feed;
