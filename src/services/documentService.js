export default function getDocuments() {
  return Promise.resolve([
    { id: '1', title: 'Документ 1', status: 'in-progress' },
    { id: '2', title: 'Документ 2', status: 'in-progress' },
    { id: '3', title: 'Документ 3', status: 'under-review' },
  ]);
}
