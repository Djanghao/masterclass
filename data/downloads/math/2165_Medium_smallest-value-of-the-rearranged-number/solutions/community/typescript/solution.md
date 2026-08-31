# easy peasy

**Author:** salisbury-espinosa
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/5802219/](https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/5802219/)

---

# Code
```typescript []
function sort(isNegative, a, b) {
    const _a = Number(a);
    const _b = Number(b);
    if (_a > _b) {
        return isNegative ? - 1 : 1;
    }
    else if (_a < _b) {
        return isNegative ? 1 : - 1;
    }
    return 0;
}
function smallestNumber(num: number): number {
    if (num === 0) {
        return 0;
    }
    const digits = Math.abs(num)
        .toString()
        .split('');
    if (num < 0) {
        return 0 - Number(digits.sort(sort.bind(null, true)).join(''));
    }
    else {
        const result = digits.filter((d) => d !== "0").sort(sort.bind(null, false));
        return Number(result[0] + "0".repeat(digits.length - result.length) + result.splice(1).join(''));
    }
};
```