# Very simple Sliding window TS solution O(N) and O(1)  10 rows

**Author:** ulzhan
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-consecutive-ones-ii/solutions/5886095/](https://leetcode.com/problems/max-consecutive-ones-ii/solutions/5886095/)

---

# Intuition
We need slide left side of window to the next element after 0.

# Approach
Let's increment left side of sliding window after next 0

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(N)

# Code
```typescript []
function findMaxConsecutiveOnes(nums: number[]): number {
    let left = 0, ans = 0, lastZero = -1;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            if (lastZero > -1) {
                left = lastZero + 1;
            }
            lastZero = right;
        }
        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};
```