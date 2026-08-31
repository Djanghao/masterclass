# 0ms by precomputing the results

**Author:** jolleekin
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotated-digits/solutions/6105066/](https://leetcode.com/problems/rotated-digits/solutions/6105066/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
const f = new Array(10001);

let cnt = 0;
for (let i = 1; i < f.length; ++i) {
    if (isGood(i)) ++cnt;
    f[i] = cnt;
}

function isGood(x: number): boolean {
    let ok = false;
    while (x > 0) {
        const d = x % 10;
        x = (x - d) / 10;
        if (d === 3 || d === 4 || d === 7) return false;
        if (d === 2 || d === 5 || d === 6 || d === 9) ok = true;
    }
    return ok;
}

function rotatedDigits(n: number): number {
    return f[n];
};
```