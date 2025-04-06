import React from "react";

const Error = ({ error }: { error?: string }) => {
  if (error) return <p className="text-red-600/50">{error}</p>;
  return (
    <p className="text-transparent">
      This space is dedicated to a possible error
    </p>
  );
};

export default Error;
