import Task01 from "@/components/task_01/Task01";
import Task02 from "@/components/task_02/Task02";
import Task03 from "@/components/task_03/Task03";
import Task04 from "@/components/task_04/Task04";
import Task05 from "@/components/task_05/Task05";
import Task06 from "@/components/task_06/Task06";
import Task07 from "@/components/task_07/Task07";
import React from "react";

function Home() {
  return (
    <div className="flex flex-col bg-violet-100 w-full h-full py-20 px-10 gap-10">
      <Task01 />
      <Task02 />
      <Task03 />
      <Task04 />
      <Task05 />
      <Task06 />
      <Task07 />
    </div>
  );
}

export default Home;
