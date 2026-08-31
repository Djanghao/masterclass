# IT IS SIMPLE

**Author:** JustChis100
**Votes:** 2
**Link:** [https://leetcode.com/problems/perfect-number/solutions/4828959/](https://leetcode.com/problems/perfect-number/solutions/4828959/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
# Code
```
function checkPerfectNumber(num: number): boolean {
    if (num == 1) {
        return false
    }
    let n = 1
    for (let s = 2; s < num; s++) {
        if (num % s == 0) {
            n += s
        }
    }
    return n == num
};
```

## PLS APWOUT