# Easy to understand JavaScript solution (Prefix Sum)

**Author:** tzuyi0817
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/4104032/](https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/4104032/)

---

# Complexity
- Time complexity:
$$O(n + limit)$$

- Space complexity:
$$O(limit)$$

# Code
```
var minMoves = function(nums, limit) {
    const moves = Array(2 + limit * 2).fill(0);
    const size = nums.length;
    let current = 0;
    let result = size;

    for (let index = 0; index < size / 2; index++) {
        const a = Math.min(nums[index], nums[size - 1 - index]);
        const b = Math.max(nums[index], nums[size - 1 - index]);

        moves[2] += 2;
        moves[a + 1] -= 1;
        moves[a + b] -= 1;
        moves[a + b + 1] += 1;
        moves[b + limit + 1] += 1;
    }
    for (let index = 2; index <= limit * 2; index++) {
        current += moves[index];
        result = Math.min(current, result);
    }
    return result;
};
```