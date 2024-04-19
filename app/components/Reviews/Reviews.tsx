import React from "react";

type ReviewType = {
  title: string;
  number: string;
  subText: string;
};

const Reviews = (props: ReviewType) => {
  return (
    <div className=" flex flex-col gap-2">
      <h1 className="text-2xl font-bold">{props.number}</h1>
      <h2 className=" text-slate-500 text-sm">{props.title}</h2>
      <span className=" text-slate-500 text-sm">{props.subText}</span>
    </div>
  );
};

export default Reviews;
