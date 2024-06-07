import React from 'react';
import { FaLink, FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks_count,
    watchers_count
  } = repo;

  return (
    <div className='card'>
      <h3>
        <a href={html_url} target='_blank' rel='noreferrer'>
          {name}
        </a>
      </h3>
      <p>{description}</p>
      <div>
        <ul>
          <li>
            <FaCodeBranch /> {forks_count}
          </li>
          <li>
            <FaEye /> {watchers_count}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RepoItem;