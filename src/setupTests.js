import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}))

jest.mock('react-chartjs-2', () => ({
  Bar: () => null
}));

const mockConsoleMethod = (realConsoleMethod) => {
  const ignoredMessages = [
    'test was not wrapped in act(...)',
  ]

  return (message, ...args) => {
    const containsIgnoredMessage = ignoredMessages.some(ignoredMessage => message.includes(ignoredMessage))

    if (!containsIgnoredMessage) {
      realConsoleMethod(message, ...args)
    }
  }
}

console.warn = jest.fn(mockConsoleMethod(console.warn))
console.error = jest.fn(mockConsoleMethod(console.error))