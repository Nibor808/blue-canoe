import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('<App />', () => {
    it('should render the Header and an image', () => {
        render(<App />);
        const headerText = screen.getByText(/The Blue Canoe/i);
        const subText = screen.getByText(/Adventures in the Kawarthas/i);
        const image = screen.getByTestId('us-img');
        expect(headerText).toBeInTheDocument();
        expect(subText).toBeInTheDocument();
        expect(image).toBeInTheDocument();
    });
});
