# typescript solution

**Author:** GaryChanCCO
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/1842583/](https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/1842583/)

---

```typescript
function replaceNonCoprimes(nums: number[]): number[] {
    function findGCD(a: number, b: number): number {
        const r = Math.min(Math.abs(b - a * Math.floor(b / a)), Math.abs(b - a * Math.ceil(b / a)));
        if (r === 0) return a;
        return findGCD(r, a);
    }

    const result: number[] = [];

    function process(num: number) {
        const top = result.pop();
        if (top === undefined) {
            result.push(num);
        } else {
            const GCD = findGCD(top, num);
            if (GCD !== 1) {
                const LCM = (top * num) / GCD;
                process(LCM);
            } else {
                result.push(top, num);
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        process(nums[i]);
    }
    return result;
}
```