import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('<App />', () => {
    it('should render the Header', () => {
        render(<App />);
        const headerText = screen.getByText(/The Blue Canoe/i);
        const subText = screen.getByText(/Adventures in the Kawarthas/i);
        expect(headerText).toBeInTheDocument();
        expect(subText).toBeInTheDocument();
    });

    it('should render the image', () => {
        render(<App />);
        const image = screen.getByTestId('us-img');
        expect(image).toBeInTheDocument();
    });
});
