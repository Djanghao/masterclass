# JS/TS solution

**Author:** maxonlinux
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/6089879/](https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/6089879/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Pidgeonhole principle + modular arithmetic

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function smallestRepunitDivByK(k: number): number {
    let remainder = 0

    // Pigeonhole principle
    for (let i = 1; i <= k; i++) {
        remainder = (remainder * 10 + 1) % k; // This is actually not 1,11,111,1111 etc. but it works because of modular arithmetic (leaves the same remainder)

        if (remainder === 0) {
            return i
        }
    }

    return -1
};
```

# Compact version (one-liner)
``` typescript []
function smallestRepunitDivByK(k) { let r = 0; for (let i = 1; i <= k; i++) { r = (r * 10 + 1) % k; if (!r) return i }; return -1 };
```