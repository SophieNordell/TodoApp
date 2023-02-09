const styles = {
  color: {
    primary: "bg-gray-400 hover:bg-gray-600",
    delete: "bg-red-500 hover:bg-red-600",
    gray: "bg-gray-500 hover:bg-gray-600",
    green: "bg-green-400 hover:bg-green-600",
  },
  size: {
    small: "text-sm px-4 py-1",
    large: "text-lg px-5 py-2",
  },
};

export default function Button(props) {
  const { title, color, size, onClick } = props;

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];

  return (
    <button
      onClick={onClick}
      className={`rounded-lg ${colorClass} ${sizeClass}`}
    >
      {title}
    </button>
  );
}
