//  Unit Testing

import { render, fireEvent, screen, waitFor} from '@testing-library/react'
import Contact from '../Contact'
import "@testing-library/jest-dom"

test('should load heading inside contact-us component ', () => {
  render(<Contact />)

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

// we can use 'it' instead of 'test' both works
it('should load button inside contact-us component ', () => {
  render(<Contact />)

  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("renders contact form with input fields", () => {
    render(<Contact />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByText(/send message/i)).toBeInTheDocument();
});

test("displays 'Message Sent!' after form submission", async () => {
    render(<Contact />);
    
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "tiwari" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "tiwari@example.com" } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: "Hello!" } });
    
    fireEvent.click(screen.getByText(/send message/i));
    
    // Check if the "Message Sent!" popup is shown
    expect(screen.getByText(/message sent!/i)).toBeInTheDocument();
    
    // Wait for the pop-up to disappear after 2 seconds
    await waitFor(() => {
        expect(screen.queryByText(/message sent!/i)).not.toBeInTheDocument();
    }, { timeout: 2000 });
});

test("form fields clear after submission", () => {
    render(<Contact />);
    
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "tiwari" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "tiwari@example.com" } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: "Hello!" } });
    
    fireEvent.click(screen.getByText(/send message/i));
    
    // Check if the form fields are cleared after submission
    expect(screen.getByLabelText(/name/i).value).toBe("");
    expect(screen.getByLabelText(/email/i).value).toBe("");
    expect(screen.getByLabelText(/message/i).value).toBe("");
});
