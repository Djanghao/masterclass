# simple and fast

**Author:** ayubxon_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/transformed-array/solutions/6127802/](https://leetcode.com/problems/transformed-array/solutions/6127802/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
List<int> constructTransformedArray(List<int> nums) {
  List<int> res = [];
  int n = nums.length;

  for (int i = 0; i < n; i++) {
    int idx = (i + nums[i] % n + n) % n;
    res.add(nums[idx]);
  }

  return res;
}

}
```