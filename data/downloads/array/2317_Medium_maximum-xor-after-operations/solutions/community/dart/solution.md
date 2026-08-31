# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-after-operations/solutions/4908174/](https://leetcode.com/problems/maximum-xor-after-operations/solutions/4908174/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To get the maximum number, take the OR of every element. This ensures we can get the maximum number since the bits will be set to '1'

1 OR 0 = 0

Given that a = 4, b = 2, c = 3
4 = 1 0 0
2 = 0 1 0
3 = 0 1 1

Now take the OR of every element and you get 1 1 1 = 7
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int maximumXOR(List<int> nums) {
    var res = 0;
    for (final num in nums) {
        res |= num;
    }

    return res;
  }
}

```