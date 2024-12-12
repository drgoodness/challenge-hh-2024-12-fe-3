import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Column from '../components/Column/Column.jsx';
import Header from '../components/Header/Header.jsx';
import useDragAndDrop from '../hooks/useDragAndDrop';
import getDocuments from '../services/documentService';
import { setDocuments } from '../reducers/documentsReducer';

function HomePage() {
  const dispatch = useDispatch();
  const documents = useSelector((state) => state.documents.list);
  const { handleDrop } = useDragAndDrop();

  const columns = [
    { title: 'В работе', status: 'in-progress' },
    { title: 'На проверке', status: 'under-review' },
    { title: 'Завершено', status: 'completed' },
  ];

  useEffect(() => {
    getDocuments().then((data) => {
      dispatch(setDocuments(data));
    });
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="board">
        {columns.map((column) => (
          <Column
            key={column.status}
            title={column.title}
            documents={documents.filter((doc) => doc.status === column.status)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, column.status)}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
