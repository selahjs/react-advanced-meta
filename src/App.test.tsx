import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "./FeedBackForm";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);
    // get the input
    const scoreInput = screen.getByTestId('score');
    fireEvent.change(scoreInput, {target: {value: score}})
    const commentInput = screen.getByTestId('comment');
    fireEvent.change(commentInput, {target: {value: comment}})

    const submmitBtn = screen.getByRole('button');
    fireEvent.click(submmitBtn);
    // You have to write the rest of the test below to make the assertion pass

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const scoreInput = screen.getByTestId('score');
    fireEvent.change(scoreInput, {target: {value: score}})

    const submmitBtn = screen.getByRole('button');
    fireEvent.click(submmitBtn);
    
    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });
});
