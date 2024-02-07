import "./CustomButton.styles.css"
import PropTypes from 'prop-types'
const CustomButton = ({ ...props }) => {
    return (
        <>
            <button
                typeBoton={ props.typeBoton }
                className={
                    props.typeBoton === undefined
                        ? "custom-button "
                        : `custom-button ${props.typeBoton}`
                }
                onClick={ props.onClick }
                type={ props.type }

            >
                { props.content }
            </button>
        </>
    )
}

CustomButton.propTypes = {
    content: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
}
export default CustomButton