import React from 'react';

function ProjectListItem({
  id,
  name,
  about,
  phase,
  link,
  image
}) {
  // image ||= "myplaceholderurl.com"
  return (
    <li>
      <figure>
        <img src={image} alt={name} />
        <button>👏{0}</button>
      </figure>

      <article className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        <p><a href={link}>View Live</a></p>
      </article>
    </li>
  );
}

export default ProjectListItem;
