import React, { useState } from "react";
import moment from "moment";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { NoteProp } from "../types";

const mock: NoteProp[] = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas cupiditate consequatur sunt tenetur obcaecati est ducimus repudiandae doloribus dignissimos ad error atque temporibus iste, quibusdam dicta quia id magni dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique nihil aut accusantium",
    createdAt: new Date(Date.now()),
    id: "0001",
  },
  {
    content:
      " nesciunt. Assumenda, temporibus neque! Quaerat quae itaque architecto ex, magni voluptatem reiciendis adipisci corporis ducimus accusamus? Illum?",
    createdAt: new Date("1h"),
    id: "0002",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, itaque. In quidem dolores libero dolorum laborum vero deleniti neque eos eius doloremque, ipsa esse, delectus illo minima corporis. Incidunt, quas!",
    createdAt: new Date("22"),
    id: "0003",
  },
  {
    content:
      "In quidem dolores libero dolorum laborum vero deleniti neque eos eius doloremque, ipsa esse, delectus illo minima corporis. Incidunt",
    createdAt: new Date("22"),
    id: "0005",
  },
];

function NoteList() {
  const colors = [
    "bg-purple-800",
    "bg-cyan-800",
    "bg-emerald-800",
    "bg-red-800",
  ];
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

  const openEditModal = (value: NoteProp) => {};

  return (
    <div className="mt-20 grid sm:grid-cols-3 md:grid-cols-4 gap-2">
      {mock.map((value) => (
        <div
          key={value.id}
          className={`${randomColor()} card bg-opacity-10 rounded-md max-h-64`}
        >
          <div className="card-body py-6 px-3 text-slate-300 overflow-y-clip">
            {value.content}
          </div>
          <div className="card-actions mt-2 py-2 px-4 flex justify-between">
            <span className="text-accent-content">
              {moment(value.createdAt).fromNow()}
            </span>
            <div className="inline-flex gap-3">
              <button
                onClick={() => openEditModal(value)}
                className="btn btn-circle btn-sm btn-primary text-white"
              >
                <AiFillEdit />
              </button>
              <button className="btn btn-circle btn-outline btn-sm btn-error">
                <BsFillTrashFill />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
