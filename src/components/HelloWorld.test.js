import { render, screen } from '@testing-library/vue';
import HelloWorld from './HelloWorld.vue';
import '@testing-library/jest-dom';

describe('HelloWorld', () => {
  it('renders props.msg when passed', async () => {
    const msg = 'Hello world';
    render(HelloWorld, {
      props: {
        msg,
      },
    });

    const messageElement = screen.getByText(msg);
    expect(messageElement).toBeInTheDocument();
  });

  it('increments count when button is clicked', async () => {
    render(HelloWorld);

    const button = screen.getByRole('button', { name: /count is 0/i });
    await button.click();

    // Assert the updated count
    const updatedCountElement = screen.getByText('count is 1');
    expect(updatedCountElement).toBeInTheDocument();
  });
});
