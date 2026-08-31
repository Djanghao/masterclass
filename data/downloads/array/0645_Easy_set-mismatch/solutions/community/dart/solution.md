# Using Map

**Author:** sarath7916
**Votes:** 1
**Link:** [https://leetcode.com/problems/set-mismatch/solutions/4606722/](https://leetcode.com/problems/set-mismatch/solutions/4606722/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
372ms
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> findErrorNums(List<int> nums) {
    Map<int, int> countMap = {};
    List<int> res = [];

    int repeatedNumber = 0;
    int expectedSum = (nums.length * (nums.length + 1)) ~/ 2;
    int actualSum = 0;

    for (var i = 0; i < nums.length; i++) {
      countMap[nums[i]] = (countMap[nums[i]] ?? 0) + 1;
      actualSum += nums[i];

      if (countMap[nums[i]] == 2) {
        repeatedNumber = nums[i];
      }
    }

    int missingNumber = expectedSum - (actualSum - repeatedNumber);

    res.add(repeatedNumber);
    res.add(missingNumber);

    return res;
  }
}

```