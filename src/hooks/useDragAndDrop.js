import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { moveDocument } from '../reducers/documentsReducer';

function useDragAndDrop() {
  const dispatch = useDispatch();

  const handleDrop = useCallback((e, newStatus) => {
    const documentId = e.dataTransfer.getData('documentId');
    dispatch(moveDocument({ id: documentId, status: newStatus }));
  }, [dispatch]);

  return { handleDrop };
}

export default useDragAndDrop;
