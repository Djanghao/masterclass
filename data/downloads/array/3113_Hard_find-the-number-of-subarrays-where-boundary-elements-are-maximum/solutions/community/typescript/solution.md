# JavaScript/TypeScript mono stack solution.

**Author:** tranhan0795
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5022150/](https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5022150/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function numberOfSubarrays(nums: number[]): number {
    const ms = [] //mono stack;
    let result = 0;

    for (const n of nums) {
        while (ms.length && n > ms[ms.length - 1][0]) {
            ms.pop();
        }

        if (ms.length && ms[ms.length - 1][0] === n) {
            ms[ms.length - 1][1] = ms[ms.length - 1][1] + 1;
        } else {
            ms.push([n, 1]);
        }

        result = result + ms[ms.length - 1][1];
    }

    return result;
};
```