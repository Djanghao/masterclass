# Typescript | Javascript, 100% faster

**Author:** tohasan
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/2636018/](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/2636018/)

---

```
function largestInteger(num: number): number {
    const oddSet = new Set('13579'.split(''));
    const digits = num.toString().split('');
    const oddDigits = sort(digits.filter(d => oddSet.has(d)));
    const evenDigits = sort(digits.filter(d => !oddSet.has(d)));
    
    let numStr = '';
    for (let i = 0; i < digits.length; i++) {
        numStr += oddSet.has(digits[i]) ? oddDigits.pop() : evenDigits.pop();
    }
    return Number(numStr);
}

function sort(digits: string[]): string[] {
    return digits.sort((d1, d2) => d1.localeCompare(d2));
}
```