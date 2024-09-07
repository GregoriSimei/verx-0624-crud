export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
    moduleFileExtensions: ['ts', 'js', 'json', 'jsx', 'tsx'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    setupFiles: ['<rootDir>/jest.setup.ts']
}