# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/four-divisors/solutions/4925444/](https://leetcode.com/problems/four-divisors/solutions/4925444/)

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
  int sumFourDivisors(List<int> nums) {
    var total = 0;
    for (int i = 0; i < nums.length; i++) {
        final Set<int> d = {};
        final num = nums[i];
        var j = 1;
        while (j <= sqrt(num).floor()) {
            if (num % j == 0) {
                d.add(num ~/ j);
                d.add(j);
            }

            j += 1;
        }
        if (d.length == 4) {
            total += d.toList().fold<int>(0, (a, b) => a + b);
        }
    }

    return total;
  }
}
```