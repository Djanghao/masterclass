# Dart: Using Hashmap

**Author:** felixrzayev
**Votes:** 1
**Link:** [https://leetcode.com/problems/subarray-sum-equals-k/solutions/3019747/](https://leetcode.com/problems/subarray-sum-equals-k/solutions/3019747/)

---

# Complexity
- Time complexity:
    - $$O(n)$$. The entire $$nums$$ array is traversed only once

- Space complexity:
    - $$O(n)$$. Hashmap $$map$$ can contain up to $$n$$ distinct entries in the worst case.

# Code
```
class Solution {
  int subarraySum(List<int> nums, int k) {
    int sum = 0;
    int result = 0;

    Map<int, int> map = {0: 1};

    for (var i = 0; i < nums.length; i++) {
      sum += nums[i];

      if (map.containsKey(sum - k)) {
        result += map[sum - k]!;
      }

      map[sum] = (map[sum] ?? 0) + 1;
    }

    return result;
  }
}
```