import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function EduTimeline() {
  const data = [
    {
        title: "2021-2025",
        content: (
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Bachelor&apos;s Degree in Computer Science and Engineering
            </h3>
            <p className="text-pink-700 font-bold mb-1">Academy of Technology</p>
            <ul className="list-disc list-inside text-white text-sm">
              <li>Graduated with First Class Honors</li>
              <li>GPA: 9.32/10 (till 6th Semester)</li>
            </ul>
          </div>
        ),
      },
      {
        title: "2018-2020", 
        content: (
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              12th Standard (ISC)
            </h3>
            <p className="text-pink-700 font-bold mb-1">St.Joseph&apos;s Convent</p>
            <ul className="list-disc list-inside text-white text-sm">
              <li>Percentage-96.25%</li>
              <li>Ranked 2nd in the school.</li>
              <li>Participated in Donation Camp.</li>
            </ul>
          </div>
        ),
      },
      {
        title: "2017-2018",
        content: (
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              10th Standard (ICSE)
            </h3>
            <p className="text-pink-700 font-bold mb-1">Stepping Stone School(High)</p>
            <ul className="list-disc list-inside text-white text-sm">
              <li>Percentage-93.25%</li>
              <li>House Captain for a year.</li>
              <li>Winner of intra-school coding competition.</li>
              <li>1st Runner-up in the Kho-Kho competition.</li>
            </ul>
          </div>
        ),
      }
  ];
  return (
    <div id="education" className=" w-full min-h-screen ">
      <Timeline data={data} />
    </div>
  );
}
