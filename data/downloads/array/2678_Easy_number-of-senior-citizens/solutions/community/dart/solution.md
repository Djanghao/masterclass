# Its just a matter of forEach !!!

**Author:** Alto-b
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-senior-citizens/solutions/5682956/](https://leetcode.com/problems/number-of-senior-citizens/solutions/5682956/)

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
  int countSeniors(List<String> details) {
    int count = 0;
    details.forEach((detail) {
      int age = int.parse(detail.substring(11, 13));
      if (age > 60) {
        count++;
      }
    });
    return count;
  }
}


```