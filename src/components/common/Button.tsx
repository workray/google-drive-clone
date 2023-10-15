import React from "react";

export default function Button({ btnClass, title, onClick }: Button) {
  return (
    <button className={`btn m-2 ${btnClass}`} onClick={onClick}>
      {title}
    </button>
  );
}
