# Easy to understand || Simple for loop o(n) || JavaScript

**Author:** user2959T
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/3572709/](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/3572709/)

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

# Code
```
function removeTrailingZeros(num: string): string {
    let start = -1;
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] === '0') {
            start = i;
        } else {
            break;
        }
    }

    return start >= 0 ? num.slice(0, start): num;
};
```