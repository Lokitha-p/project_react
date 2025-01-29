import React from 'react';
import { useSelector } from 'react-redux';

const Users = () => {
  
  const users = useSelector((state) => state.userinfo.users);
  console.log(users);

  return (
    <div>
      <section className="Users">
        <h1>Users</h1>
        <p>HI IM LOKIEE.</p>
        <img
          src="https://www.fearfreehappyhomes.com/wp-content/uploads/2020/08/bigstock-Closeup-Meowing-Ginger-Cat-On-97254212.jpg"
          alt="Users"
          style={{ width: '350px', height: '250px', objectFit: 'cover' }}
        />
      </section>
    </div>
  );
};

export default Users;
