import "./TableTitle.styles.css"
import PropTypes from 'prop-types'
const TableTitle = ({ prop }) => {

  const dataTitle = prop;

  return (
    <thead
      className="table-title"
    >
      { dataTitle.map((prop) => (
        <th key={ prop }>{ prop }</th>
      )) }
    </thead>
  );
};


TableTitle.propTypes = {
  prop: PropTypes.array,
}
export default TableTitle;