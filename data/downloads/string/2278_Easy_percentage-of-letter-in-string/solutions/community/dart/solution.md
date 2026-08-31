# Simple solution

**Author:** Youssef1911
**Votes:** 0
**Link:** [https://leetcode.com/problems/percentage-of-letter-in-string/solutions/6042290/](https://leetcode.com/problems/percentage-of-letter-in-string/solutions/6042290/)

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
  int percentageLetter(String s, String letter) {
    int count = 0 ;
    List<String> list= s.split('');
 count = list.where((e) => e == letter).length;
    print(count);
    double res = (count/s.length )*100;
    return res.floor();
  }
}

```