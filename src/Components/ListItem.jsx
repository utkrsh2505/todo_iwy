function ListItem({ title, status, id, handleDelete, handleToggle }) {
  return (
    <div>
      <span>{`${id}--${title}--${status}`}</span>
      <button onClick={() => handleDelete(id)}>x</button>
      <button onClick={() => handleToggle(id)}>Toggle</button>
    </div>
  );
}
export default ListItem;
