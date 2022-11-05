import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { fetchAllJobs } from 'redux/jobs/jobOperations';
import { useDispatch, useSelector } from 'react-redux';
import { JobBoard } from 'pages/JobBoard';
import { JobDetails } from 'pages/JobDetails';
import { selectorGetJobs } from 'redux/jobs/jobSelectors';

export const App = () => {
  const jobs = useSelector(selectorGetJobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllJobs());
  }, [dispatch]);

  return (
    jobs && (
      <Routes>
        <Route path="/job-board" element={<JobBoard />} />
        <Route path="/job-board/:id" element={<JobDetails />} />
        <Route path="*" element={<Navigate to="/job-board" />} />
      </Routes>
    )
  );
};
