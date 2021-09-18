import React from "react";
import { useAuth } from "../providers/auth";

function Profile() {
  const { user } = useAuth();

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <span>Profile</span>
      <h1>{user.name}</h1>
    </div>
  );
}

export default Profile;
