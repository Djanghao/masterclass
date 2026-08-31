# Java || Python || TypeScript || Simple Two Pointers / Sliding Window

**Author:** subscriber6436
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-alternating-subarray/solutions/4727488/](https://leetcode.com/problems/longest-alternating-subarray/solutions/4727488/)

---

# Intuition
Here you have a list of `nums`. You should find **the longest alternating subarray** according to the problem.

# Approach
Simply use **Two Pointers** and tweak `sign` to be sure, that integers are following in the right sequence.

# Complexity
- Time complexity: **O(N)**

- Space complexity: **O(1)**

# Code
```java []
class Solution {
    public int alternatingSubarray(int[] nums) {
        int left = 0;
        int ans = -1;
        int sign = 1;

        if (nums[0] + 1 == nums[1])
            ans = 2;

        for (int right = 1; right < nums.length; right++) {
            int prev = nums[right - 1];
            int cur = nums[right];

            if (prev + sign != cur) {
                left = right - (prev + 1 == nums[right] ? 1 : 0);
                sign = left == right ? 1 : -1;
            } else {
                ans = Math.max(ans, right - left + 1);
                sign *= -1;
            }
        }

        return ans;
    }
}
```
```python []
class Solution:
    def alternatingSubarray(self, nums: list[int]) -> int:
        left = 0
        ans = 2 if nums[0] + 1 == nums[1] else -1
        sign = 1

        for right in range(1, len(nums)):
            prev, cur = nums[right - 1], nums[right]

            if prev + sign != cur:
                left = right - int(prev + 1 == nums[right])
                sign = 1 if left == right else -1
            else:
                ans = max(ans, right - left + 1)
                sign *= -1

        return ans
```
```typescript []
function alternatingSubarray(nums: number[]): number {
    let left = 0
    let ans = nums[0] + 1 == nums[1] ? 2 : -1
    let sign = 1

    for (let right = 1; right < nums.length; right++) {
        const [prev, cur] = [nums[right - 1], nums[right]]

        if (prev + sign !== cur) {
            left = right - Number(prev + 1 == nums[right])
            sign = left === right ? 1 : -1
        } else {
            ans = Math.max(ans, right - left + 1)
            sign *= -1
        }
    }

    return ans
};