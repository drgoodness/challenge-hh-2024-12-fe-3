import React from 'react';
import DocumentCard from '../DocumentCard/DocumentCard.jsx';

function Column({ title, documents, onDragOver, onDrop }) {
  return (
    <div
      className="column"
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <h2>{title}</h2>
      {documents.map(doc => (
        <DocumentCard key={doc.id} document={doc} />
      ))}
    </div>
  );
}

export default Column;
