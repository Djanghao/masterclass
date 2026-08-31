# Simple typescript DP solution, readable

**Author:** keith9601
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/2831391/](https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/2831391/)

---

# Intuition
Simple DP

# Approach
One of three things can happen at each iteration:

1. If odd value found, reduce it 1, count + 1
2. If no odd value found, divide all by 2, count + 1
3. If all zero, done and return the count

# Complexity
- Time complexity:
O(nLog(n))

- Space complexity:
O(1)

# Code
```
function minOperations(nums: number[]): number {
    let count = 0;
    let hasDivision = false;

    while (nums.some(n => n)) {
        for (let i = 0; i < nums.length; ++i) {
            if (!nums[i]) {
                continue;
            } else if (nums[i] % 2) {
                count++;
                nums[i] --;
            } else {
                hasDivision = true;
            }
        }

        if (hasDivision) {
            count++;
            hasDivision = false;
            nums = nums.map(num => num/2)
        }
    }

    return count;
};
```