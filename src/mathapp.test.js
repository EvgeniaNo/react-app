import * as app from './mathapp';
import * as math from './math';

describe('math', () => {
    it('calls math.add', () => {
        const addMock = jest.spyOn(math, "add");

        // override the implementation
        addMock.mockImplementation(() => "mock");

        expect(app.doAdd(1, 2)).toEqual("mock");

        // restore the original implementation
        addMock.mockRestore();

        expect(app.doAdd(1, 2)).toEqual(3);
    });


    it("calls math.add", () => {
        const addMock = jest.spyOn(math, "add");
        // calls the original implementation
        expect(app.doAdd(1, 2)).toEqual(3);

        // and the spy stores the calls to add
        expect(addMock).toHaveBeenCalledWith(1, 2);
    });
});
