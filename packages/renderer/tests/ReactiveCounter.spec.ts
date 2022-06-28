import { mount } from '@vue/test-utils';
import { expect, test, vi } from 'vitest';
import { readFile } from '#preload';
import ReactiveCounter from '../src/components/ReactiveCounter.vue';

vi.mock('#preload', () => {
  return {
    readFile: vi.fn(() => void 0),
  };
});

test('ReactiveHash component', async () => {
  expect(ReactiveCounter).toBeTruthy();
  const wrapper = mount(ReactiveCounter);

  const add = wrapper.get('.add');

  expect(add.text()).toBe('count is: 0');
  await add.trigger('click');
  expect(add.text()).toBe('count is: 1');

  const read = wrapper.get('.read');
  await read.trigger('click');
  expect(readFile).toBeCalledTimes(1);
  await read.trigger('click');
  expect(readFile).toBeCalledTimes(2);
});
