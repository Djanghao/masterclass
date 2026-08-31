# Dart solution

**Author:** warmXD
**Votes:** 0
**Link:** [https://leetcode.com/problems/mice-and-cheese/solutions/3816052/](https://leetcode.com/problems/mice-and-cheese/solutions/3816052/)

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
  int miceAndCheese(List<int> reward1, List<int> reward2, int k) {
      List<int> diff = [];
      int output = 0;
      for (int i = 0; i< reward1.length; i++){
          diff.add(reward1[i] - reward2[i]);
          output += reward2[i];
      }
      diff.sort((a,b) => b.compareTo(a));
      for (int j = 0; j < k; j++){
          output += diff[j];
      }
      return output;
  }
}
```