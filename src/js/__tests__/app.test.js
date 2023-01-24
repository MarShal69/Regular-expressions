import Validator from '../app';

test.each([
  ['правильный вариант', 'Anton_22-01-90-warrior', true],
  ['неправильный вариант-кириллица', 'Антон_22-01-1990-warrior', false],
  ['неправильный вариант-4 цифры подряд', 'Anton_22-01-1990-warrior', false],
  ['неправильный вариант-цифра(символ) в начале имени', '9Anton_22-01-90-warrior', false],
  ['неправильный вариант-цифра(символ) в конце имени', 'Anton_22-01-90-warrior-', false],
])(
  ('проверка имени вариант %s при %i'),
  (_, name, expected) => {
    const user = new Validator(name);
    const check = user.validateUsername();
    expect(check).toBe(expected);
  },
);
