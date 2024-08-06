import PropTypes from 'prop-types'; 
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}
Pre.propTypes = {
  load: PropTypes.bool.isRequired, // Validate that `load` is a boolean
};

export default Pre;
