import PropTypes from 'prop-types';

export const FeedbackOptions = ({ optionsList, onLeaveFeedback }) => {
  return optionsList.map(el => (
    <button key={el} onClick={() => onLeaveFeedback(el)}>
      {[el]}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  optionsList: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
