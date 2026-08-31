# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/4363012/](https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/4363012/)

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
  int subarrayLCM(List<int> nums, int k) {
    var c = 0;
    for (int i = 0; i < nums.length; i++) {
        var currLCM = nums[i];
        if (currLCM == k) {
            c += 1;
        }

        for (int j = i + 1; j < nums.length; j++) {
            currLCM = leastCommonMultiple(currLCM, nums[j]);
            if (currLCM == k) {
                c += 1;
            }
            if (currLCM > k) {
                break;
            }
        }
    }

    return c;
  }

  int leastCommonMultiple(int a, int b) {
      if (a == 0 || b == 0) {
          return 0;
      }

      return ((a * b) ~/ a.gcd(b));
  }
}
```