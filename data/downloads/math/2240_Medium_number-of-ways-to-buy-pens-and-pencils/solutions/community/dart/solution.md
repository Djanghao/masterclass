# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/4612023/](https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/4612023/)

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
  int waysToBuyPensPencils(int total, int cost1, int cost2) {
    if (total < cost1 && total < cost2) {
        return 1;
    }
    var sum = 0;
    var pencils = 0;
    while (total > 0) {
        if (pencils == 0) {
            total -= 0;
        } else {
            total -= cost2;
        }
        if (total < 0) {
            break;
        }
        final pens = total ~/ cost1;
        sum += (pens + 1);    
        pencils++;
    }
    return sum;
  }
}

```