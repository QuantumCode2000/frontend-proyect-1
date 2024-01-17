import PropTypes from 'prop-types';
import CustomTableRow from "./CustomTableRow";
import "./CustomTable.styles.css";
const CustomTable = ({ headerData, bodyData }) => {
    const header = Object.keys(headerData)    // console.log(headerData);
    return (
        <>
            <table>
                <thead className='table-head'>
                    {
                        header.map((prop) => (
                            <td key={ prop }>{ prop }</td>
                        ))
                    }
                </thead>
                <tbody className='table-body'>
                    <CustomTableRow
                        data={ bodyData }
                    />
                </tbody>
            </table>
        </>
    )

}

CustomTable.propTypes = {
    headerData: PropTypes.object,
    bodyData: PropTypes.object,
}


export default CustomTable;