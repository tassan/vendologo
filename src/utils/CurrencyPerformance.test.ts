import { performance } from 'perf_hooks';
import formatCurrency from './CurrencyFormatter';

describe('formatCurrency performance', () => {
    test('measures performance for multiple calls', () => {
        const numberOfCalls = 100000; // Adjust this value to control the number of test iterations
        const startTime = performance.now();

        for (let i = 0; i < numberOfCalls; i++) {
            formatCurrency(i * 1.23, 'R$', ',', '.', false);
        }

        const endTime = performance.now();
        const elapsedTime = endTime - startTime;
        console.log(`Execution time for ${numberOfCalls} calls: ${elapsedTime.toFixed(2)} ms`);

        // Optional: Set an arbitrary threshold to check if the test passes or fails
        const threshold = 1000; // Adjust this value to set the maximum allowed execution time in milliseconds
        expect(elapsedTime).toBeLessThanOrEqual(threshold);
    });
});
