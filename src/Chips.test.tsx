import {render} from "@testing-library/react";
import {ChipsTest} from "./Chips";

describe('Chips test', () => {
    it('should render', () => {
        const { container } = render(<ChipsTest />)
        expect(container).not.toBe(null)
    })
})