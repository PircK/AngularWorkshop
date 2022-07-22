import { StarsPipe } from './stars.pipe';

describe('StarsPipe', () => {

  const pipe = new StarsPipe();
  const input = 'API';
  const expectedOutput = '***';

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it("should replace 'API' with '***'", () => {
    expect(pipe.transform(input)).toBe(expectedOutput);
  });

});
