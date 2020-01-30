import React from "react";

import { GRADE_CLASS_ARRAY } from "./ChemicalData";

export type scoreType = {
  date: number;
  score: number;
};
export const getBestResults = (key: string): scoreType[] =>
  JSON.parse(localStorage.getItem(key) || "[]");

export const BestResultsScreen = (): JSX.Element => {
  return (
    <div className="main main1-background-size">
      {GRADE_CLASS_ARRAY.map((grade, index) => (
        <div key={grade}>
          <div>BestResultsScreen {grade}</div>
          {getBestResults(GRADE_CLASS_ARRAY[index]).map((record: scoreType) => (
            <div className="display-flex" key={record.date}>
              <div className="record-score">{record.score}</div>
              <div className="record-date">
                {new Date(record.date).toLocaleDateString()}{" "}
                {new Date(record.date).toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};