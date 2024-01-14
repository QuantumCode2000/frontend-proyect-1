const TableTitle = ({ prop }) => {

  const dataTitle = prop;

  return (
    <thead>
      { dataTitle.map((prop) => (
        <th key={ prop }>{ prop }</th>
      )) }
    </thead>
  );
};

export default TableTitle;