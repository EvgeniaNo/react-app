let __value = 42;

const axios = jest.fn(() => __value);

isomorphicFetch.__setValue = v => __value = v;

export default isomorphicFetch;