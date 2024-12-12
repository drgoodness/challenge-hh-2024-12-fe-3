import React from 'react';

function DocumentCard({ document }) {
  const handleDragStart = e => {
    e.dataTransfer.setData('documentId', document.id);
  };

  return (
    <div
      className="document-card"
      draggable
      onDragStart={handleDragStart}
    >
      {document.title}
    </div>
  );
}

export default DocumentCard;
