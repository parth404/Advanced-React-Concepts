// List component that takes in items, getKey and renderItem as props.
// items={[id:1, name:"Kyle", age:36], [id:2, name:"Sally", age:40]}, getKey={item=>item.id}, renderItem={item=><div>{item.name}</div>}

type ListProps<T> = {
  items: T[];
  getKey: (item: T) => React.Key;
  renderItem: (item: T) => React.ReactNode;
};

// This is a functional component that takes in a prop called items of type T[] and getKey and renderItem of type functions.

export default function List<T>({ items, getKey, renderItem }: ListProps<T>) {
  return (
    <>
      <h4>This is a Generic List Component</h4>
      <ul>
        {items.map((item) => {
          return <li key={getKey(item)}>{renderItem(item)}</li>;
        })}
      </ul>
    </>
  );
}
