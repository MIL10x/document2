import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase/config";

const FeedbackBox = () => {
  const log = JSON.parse(localStorage.getItem("log"));
  console.log(log);
  const [post, setpost] = useState([]);
  const [toggle, settoggle] = useState(false);
  const collectiondata = collection(db, "Message");
  useEffect(() => {
    async function getpost() {
      const data = await getDocs(collectiondata);
      setpost(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    getpost();
  }, [toggle]);
  async function handledelete(id) {
    const document = doc(db, "Message", id);
    await deleteDoc(document);
    settoggle(!toggle);
  }

  return (
    <>
      {post &&
        post.map((data, index) => (
          <div
            key={index}
            className="mt-10 flex gap-16 justify-between px-10 min-h-24 items-center bg-blue-100 dark:bg-gray-900 p-5 rounded-xl "
          >
            <div className="flex flex-col gap-5  ">
              <p>{data.name}</p>
              <p>{data.feedback}</p>
            </div>
            {log && (
              <button onClick={() => handledelete(data.id)}>
                <i className="bi bi-trash"></i>
              </button>
            )}
          </div>
        ))}
    </>
  );
};

export default FeedbackBox;
