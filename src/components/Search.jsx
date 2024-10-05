import { useEffect, useState } from "react";

const Search = () => {
  const [users, setUsers] = useState(null);

  const fetchUsers = () => {
    const apiUrl = "https://task-manager-back-end-2.onrender.com/users";

    fetch(apiUrl)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        setUsers(data)
    })
  };
  useEffect(()=>{
    fetchUsers()
  },[])
  return (
    <div>
      <h2>Search Engine</h2>
      <p>Search a User by name or email</p>

      <div>
        <div>
          <input type="text" placeholder="Search here" />
        </div>
        <div>
            {
                users !== null ? (
                    users.map((user, index)=>{
                        return <h4 key={index}>{user.name} <br /> {user.email}</h4>
                    })
                ):
                <p>No users</p>
            }
        </div>
      </div>
    </div>
  );
};

export default Search;
