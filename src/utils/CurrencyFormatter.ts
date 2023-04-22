export default function formatCurrency(
    value: number,
    currencySymbol: string = 'R$',
    decimalSeparator: string = ',',
    thousandSeparator: string = '.',
    showSymbol: boolean = true
): string {
    const integerValue = Math.trunc(value);
    const decimalValue = Math.round((value - integerValue) * 100);

    const formattedInteger = integerValue
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);

    const formattedDecimal = decimalValue.toString().padStart(2, '0');
    const symbol = showSymbol ? `${currencySymbol} ` : '';

    return `${symbol}${formattedInteger}${decimalSeparator}${formattedDecimal}`;
}
