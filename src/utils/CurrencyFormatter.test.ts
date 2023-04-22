import formatCurrency from './CurrencyFormatter';

describe('formatCurrency', () => {
    test('formats simple values', () => {
        expect(formatCurrency(1000)).toBe('R$ 1.000,00');
        expect(formatCurrency(1234.56)).toBe('R$ 1.234,56');
    });

    test('formats values with custom currency symbol', () => {
        expect(formatCurrency(1000, 'USD$')).toBe('USD$ 1.000,00');
    });

    test('formats values with custom separators', () => {
        expect(formatCurrency(1000, 'R$', '.', ',')).toBe('R$ 1,000.00');
    });

    test('formats values with different combinations of parameters', () => {
        expect(formatCurrency(1234.56, 'USD$', '.', ',')).toBe('USD$ 1,234.56');
    });

    test('rounds decimal values correctly', () => {
        expect(formatCurrency(1000.499)).toBe('R$ 1.000,50');
        expect(formatCurrency(1000.004)).toBe('R$ 1.000,00');
    });

    test('formats values without currency symbol', () => {
        expect(formatCurrency(1000, 'R$', ',', '.', false)).toBe('1.000,00');
    });

});
