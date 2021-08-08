import { useEffect, useState } from "react";
import { getComments } from "./getComments";

export const Body = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments().then(({ data }) => {
      console.log(data);
      setComments(data);
    });
  }, []);
  return (
    <tbody>
      {comments.map((c) => (
        <tr>
          <th>{c.id}</th>
          <td>{c.name}</td>
          <td>{c.email}</td>
          <td>{c.body}</td>
        </tr>
      ))}
    </tbody>
  );
};
