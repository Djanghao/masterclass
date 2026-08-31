# Oscillations near 0

**Author:** pvorona
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/3469871/](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/3469871/)

---

# Intuition
n = 3 => [-1, 0, 1]
n = 4 => [-2, -1, 1, 2]

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```
function sumZero(n: number): number[] {
    const result: number[] = []
    if (n % 2 !== 0) {
        result.push(0)
    }
    for (let i = 1; result.length < n; i++) {
        result.push(
            -i,
            i,
        )
    }
    return result
}

```