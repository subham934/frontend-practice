import React from "react";
import { useParams } from "react-router";

const CourseDetail = () => {
  const params = useParams();
  return (
    <div className="text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
      CourseDetail - {params.id}
    </div>
  );
};

export default CourseDetail;
