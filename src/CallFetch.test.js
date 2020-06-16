import "babel-polyfill";
import axios from 'axios';
import { CallFetch } from './CallFetch';

jest.mock('axios');

describe('CallFetch', () => {
    it("return value from api", async () => {
        const data = {
            data: {
                title: 'Lizzo'
            }
        };

        axios.get.mockImplementationOnce(() => Promise.resolve(data));

        await expect(CallFetch()).resolves.toEqual("Lizzo");

    });
})
