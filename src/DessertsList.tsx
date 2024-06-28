function DessertsList(props) {
  // Implement the component here.
  const healthyDeserts = props.data
    .filter((data) => data.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map((desert) => {
      return (
        <li key={desert.name}>{`${desert.name} - ${desert.calories} cal`}</li>
      );
    });
  return <ul>{healthyDeserts}</ul>;
}

export default DessertsList;
