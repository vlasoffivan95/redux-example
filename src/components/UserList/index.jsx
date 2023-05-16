import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "store/slices/userSlice";

function UserList() {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <section>
      {isLoading && <div>Loading</div>}
      {error && <div>Error</div>}
      {users.length > 0 &&
        users.map((u) => <article key={u.id}>{JSON.stringify(u)}</article>)}
    </section>
  );
}

export default UserList;
