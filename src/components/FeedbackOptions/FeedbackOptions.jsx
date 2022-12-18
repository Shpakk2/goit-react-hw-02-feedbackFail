export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul>
        {options.map(option => {
            return (
            <li>
            <button type="button" onClick={() => onLeaveFeedback}>
            {option}
            </button>
            </li>
            )
            })
        }
        </ul>
    )
}