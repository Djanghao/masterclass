# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/tuple-with-same-product/solutions/4401592/](https://leetcode.com/problems/tuple-with-same-product/solutions/4401592/)

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
```
class Solution {
  int tupleSameProduct(List<int> nums) {
    var ans = 0;
    Map<int, int> m = {};
    for (int i = 0; i < nums.length; i++) {
        for (int j = i + 1; j < nums.length; j++) {
            final prod = nums[i] * nums[j];
            if (!m.containsKey(prod)) {
                m[prod] = 1;
            } else {
                m[prod] = m[prod]! + 1;
            }
        }
    }

    m.entries.forEach((entry) {
        final total = (entry.value * (entry.value - 1)) ~/ 2;
        ans += total;
    });
    
    return ans * 8;
  }
}
```