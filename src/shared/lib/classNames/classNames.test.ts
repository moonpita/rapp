import { classNames } from './classNames';

describe('classnames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with with additional params', () => {
    expect(classNames('someClass', {}, ['addClass1', 'class2'])).toBe('someClass addClass1 class2');
  });
  test('with with mods', () => {
    expect(classNames('someClass', {
      hoverable: true,
      active: false,
    })).toBe('someClass hoverable');
  });
  test('with with mods undefined', () => {
    expect(classNames('someClass', {
      hoverable: true,
      active: undefined,
    })).toBe('someClass hoverable');
  });
});
