# Intuition Typescript beats 100%

**Author:** kizitonwaka
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/5633372/](https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/5633372/)

---

# Intuition
<!-- Describe your approach to solving the problem. -->
Let the minimum value in nums be x; we can consider the following cases:

If x occurs once: The minimum length of nums achievable in this case is 1, since every other value, y, can be paired with x, resulting in deleting x and y, and inserting x % y == x, since x < y. So, only x remains after the operations.

If there is a value y in nums such that y % x is not equal to 0: The minimum achievable length in this case is 1 as well, because inserting y % x creates a new minimum, since y % x < x, returning to the first case.

If neither of the previous cases holds, and x occurs cnt times: The minimum length of nums achievable in this case is ceil(cnt / 2).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
0(1)

# Code
```
function minimumArrayLength(nums: number[]): number {
    const min = Math.min(...nums);
    let count = 0;

    for (const num of nums) {
        if (num % min != 0) {
            return 1
        }
        if (num === min) {
            count++;
        }
    }

    return Math.ceil(count/2);
};
```