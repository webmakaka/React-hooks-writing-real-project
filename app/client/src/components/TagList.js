import React from 'react';

export const TagList = ({ tags }) => {
  return (
    <ul className="tag-list">
      {tags.map((tag) => (
        <li key={tag} className="tag-default tag-pill tag-outline">
          {tag}
        </li>
      ))}
    </ul>
  );
};
