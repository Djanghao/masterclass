# Sliding Window

**Author:** CHIYOI
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-subarrays-with-sum/solutions/4873609/](https://leetcode.com/problems/binary-subarrays-with-sum/solutions/4873609/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Optimized version of the current 100% solution (60ms) when I checked this problem, which is:
```typescript
function getCountOfSubarraySumWithGoal(nums: number[], goal: number) {
    let n = nums.length, left = 0, right = 0, sum = 0, count = 0;

    for(right;right<n;right++){
        sum += nums[right];

        while(left<=right && sum > goal){
            sum -= nums[left];
            left++;
        }
        count += right-left+1;
    }
    return count;
}

function numSubarraysWithSum(nums: number[], goal: number): number {
    return getCountOfSubarraySumWithGoal(nums, goal) - getCountOfSubarraySumWithGoal(nums, goal - 1);
};
```

# Approach
<!-- Describe your approach to solving the problem. -->
Intuitive.

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
Modified some naming and window bound choice.
```typescript
function numSubarraysWithSum(nums: number[], goal: number): number {
  return numSubarraysWithinSum(nums, goal) - numSubarraysWithinSum(nums, goal - 1)
}

const numSubarraysWithinSum = (nums: number[], goal: number): number => {
  let left = 0, right = 1
  let sum = nums[0]
  let answer = 0
  for (; right <= nums.length; right++) {
    for (; left < right && sum > goal; left++)
      sum -= nums[left]
    answer += right - left
    sum += nums[right]
  }
  return answer
}

```