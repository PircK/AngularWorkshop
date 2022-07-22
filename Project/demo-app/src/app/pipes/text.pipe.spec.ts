import { TextPipe } from './text.pipe';

describe('TextPipe', () => {

  const pipe = new TextPipe();
  const input = 'bla bla';
  const expectedOutput = 'blaSPACEbla';

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it("should replace 'bla bla' with 'blaSPACEbla'", () => {
    expect(pipe.transform(input)).toBe(expectedOutput);
  });

});
