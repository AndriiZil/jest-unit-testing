const myMockFn = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call');

console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
// > 'first call', 'second call', 'default', 'default'