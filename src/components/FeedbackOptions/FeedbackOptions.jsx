export const FeedbackOptions = ({optionsList, onLeaveFeedback}) => {
    return (
        optionsList.map(el => (
            <button key={el} onClick={() => onLeaveFeedback(el)}>{[el]}</button>
        ))
    )
}