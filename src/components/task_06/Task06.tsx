import React from "react";
import PersonInfo from "./PersonInfo";

function Task06() {
  return (
    <div className="flex flex-col gap-5 p-5 max-w-[600px] bg-white rounded-lg items-center">
      <PersonInfo
        name="Alexa Kadri"
        designation="Front-end Developer"
        image="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=800"
        description="W3C certified front-end developer with 4+ years of experience who is comfortable working with Javascript, HTML/CSS, and responsive web design to delever exceptional customer experience."
        isRightAlign={false}
      />
      <PersonInfo
        name="Alexa Kadri"
        designation="Flutter Developer"
        image="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=800"
        description="If you're looking for a dedicated Flutter developer to bring your vision to life or collaborate on a challenging project, I'm ready to roll up my sleeves and get to work. Let's connect on LinkedIn or GitHub."
        isRightAlign={true}
      />
    </div>
  );
}

export default Task06;
