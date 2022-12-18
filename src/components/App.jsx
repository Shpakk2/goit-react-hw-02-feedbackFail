import React from "react";
import css from "./App.module.css"


import { Section } from './Section/Section';
import { FeedbackOptions} from "./FeedbackOptions/FeedbackOptions"
import { Statistic} from "./Statistics/Statistics"

export class App extends React.Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  onLeaveFeedback = event => {
    console.log(event)
  }
  
  countTotalFeedback = () => {

  }

  countPositiveFeedbackPercentage = () => {

  }

  render() {
    return (
      <div>
        <title className={css.title}>Hello</title>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        {/* <Section title="Statistics">
        
        </Section> */}
      </div>
    )
  }
}