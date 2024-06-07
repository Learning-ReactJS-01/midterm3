import React from 'react';
import { FaLink, FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
  } = repo;

  return (
    <div className='card'>
      <h3>
        <a href={html_url} target='_blank' rel='noreferrer'>
          {name}
        </a>
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default RepoItem;