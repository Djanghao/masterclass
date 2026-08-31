# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5303978/](https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5303978/)

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
  int numberOfPairs(List<int> nums1, List<int> nums2, int k) {
    Map<int, int> m = {};
    for (final num in nums2) {
        final prod = num * k;
        m[prod] = (m[prod] ?? 0) + 1;
    }

    var count = 0;
    for (final num in nums1) {
        var i = 1;
        while (i * i <= num) {
            final res = num % i;
            if (res == 0) {
                count += m[i] ?? 0;

                if (num ~/ i != i) {
                    count += m[num ~/ i] ?? 0;
                }
            }

            i++;
        }
    }

    return count;
  }
}
```