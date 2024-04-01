import React from "react";
import PersonAvatar from "./PersonAvatar";

function Task02() {
  return (
    <div className="flex flex-wrap justify-around rounded-xl p-10 bg-gradient-to-t from-zinc-900 to-zinc-800">
      <PersonAvatar
        name="Simon Roben"
        designation="Founder and CEO"
        image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
      <PersonAvatar
        name="Alexa Kadri"
        designation="Flutter Developer"
        image="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
      <PersonAvatar
        name="Andrea Piacquadio"
        designation="UX Designer"
        image="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
      <PersonAvatar
        name="Alexa Kadri"
        designation="Marketing Specialist"
        image="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
    </div>
  );
}

export default Task02;
