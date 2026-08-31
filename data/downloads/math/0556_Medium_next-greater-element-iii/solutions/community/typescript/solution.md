# beats 100% || My solution in JS/TS

**Author:** abhinavleadsquared
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-iii/solutions/5968249/](https://leetcode.com/problems/next-greater-element-iii/solutions/5968249/)

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
```typescript []
function nextGreaterElement(n: number): number {
    let newN = n.toString().split("");

    let i = newN.length - 2;
    while (i >= 0 && newN[i] >= newN[i + 1]) {
        i--;
    }

    if (i < 0) return -1;

    let j = newN.length - 1;
    while (newN[j] <= newN[i]) {
        j--;
    }

    [newN[i], newN[j]] = [newN[j], newN[i]];

    let rightPart = newN.slice(i + 1).reverse();
    let result = Number(newN.slice(0, i + 1).concat(rightPart).join(""));

    return result > 2 ** 31 - 1 ? -1 : result;
}

```