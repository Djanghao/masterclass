# Why did you do it in DART? 100% 100% Solution

**Author:** Delta7Actual
**Votes:** 0
**Link:** [https://leetcode.com/problems/constrained-subsequence-sum/solutions/4192944/](https://leetcode.com/problems/constrained-subsequence-sum/solutions/4192944/)

---

# Intuition
# **I have no idea**

---


![Screenshot 2023-10-02 131803.png](./images/0.png)

---


# Approach
I thought it would be funny to translate with Mr GPT

---


# Complexity
- Time complexity:
Pretty good I imagine

- Space complexity:
Idk I couldnt care less

# Code
```
class Solution {
  int constrainedSubsetSum(List<int> nums, int k) {
    int maxSum = nums[0];
    List<int> maxSumQueue = [];

    for (int i = 0; i < nums.length; i++) {
      nums[i] += (maxSumQueue.isNotEmpty) ? maxSumQueue[0] : 0;
      maxSum = max(maxSum, nums[i]);

      while (maxSumQueue.isNotEmpty && nums[i] > maxSumQueue.last) {
        maxSumQueue.removeLast();
      }

      if (nums[i] > 0) {
        maxSumQueue.add(nums[i]);
      }

      if (i >= k && maxSumQueue.isNotEmpty && maxSumQueue[0] == nums[i - k]) {
        maxSumQueue.removeAt(0);
      }
    }
    return maxSum;
  }
}
```