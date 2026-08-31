# Java | Actual Constant Space Solution

**Author:** EOAndersson
**Votes:** 53
**Link:** [https://leetcode.com/problems/left-and-right-sum-differences/solutions/3233427/](https://leetcode.com/problems/left-and-right-sum-differences/solutions/3233427/)

---

# Intuition
Some solutions claim to use $$O(1)$$ memory, but still create a new results array of equal length to `nums`, which is $$O(n)$$. Instead we can realise that 'Left and Right Sum' is just a synonym of 'Prefix and Suffix Sum', so we can keep track of both and thereby only use constant memory.

# Approach
Loop through the array once and sum up the values as `rightSum`, then loop through it again and this time keep track of `leftSum` while also updating `nums` to its new values.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int[] leftRigthDifference(int[] nums) {
        int leftSum = 0, rightSum = 0, n = nums.length;
        for(int num : nums) rightSum += num;
        for(int i = 0; i < n; i++) {
            int val = nums[i];
            rightSum -= val;
            nums[i] = Math.abs(leftSum - rightSum);
            leftSum += val;
        }
        return nums;
    }
}
```

Since someone asked, but deleted their comment, here's an alternate version without the `val`variable. Personally I feel like the code becomes a bit less readable, but that's mostly a matter of personal preference.
```
class Solution {
    public int[] leftRigthDifference(int[] nums) {
        int leftSum = 0, rightSum = 0, n = nums.length;
        for(int num : nums) rightSum += num;
        for(int i = 0; i < n; i++) {
            leftSum += nums[i];
            rightSum -= nums[i];
            nums[i] = Math.abs((leftSum - nums[i]) - rightSum);
        }
        return nums;
    }
}
```