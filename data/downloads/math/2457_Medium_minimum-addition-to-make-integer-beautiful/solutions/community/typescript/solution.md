# TS Solution

**Author:** ronmiles
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/5632901/](https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/5632901/)

---

# Complexity
- Time complexity: $$nlog(n)$$ - `~50ms`


# Code
```
function makeIntegerBeautiful(n: number, target: number): number {
    if (sumDigits(n) <= target) {
        return 0;
    } else {
        let exp = 10;
        let roundedNum = Math.ceil(n / exp) * exp;
        while (sumDigits(roundedNum) > target) {
            exp *= 10;
            roundedNum = Math.ceil(n / exp) * exp;
        }
        return roundedNum - n;
    }

};

function sumDigits(n: number): number {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum
}
```