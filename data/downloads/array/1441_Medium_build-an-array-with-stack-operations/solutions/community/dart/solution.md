# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/5399362/](https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/5399362/)

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
  List<String> buildArray(List<int> target, int n) {
    var count = 0;
    List<String> res = [];
    var number = 1;
    while (count != target.length && number <= n) {
        if (target.contains(number)) {
            count++;
            res.add("Push");
        } else {
            res.add("Push");
            res.add("Pop");
        }

        number++;
    }

    return res;
  }
}
```