# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/last-stone-weight/solutions/3798708/](https://leetcode.com/problems/last-stone-weight/solutions/3798708/)

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
  int lastStoneWeight(List<int> stones) {
    while (true) {
      stones.sort((a, b) => b.compareTo(a));
      if (stones.length == 1) {
        return stones[0].abs();
      }
      if (stones.isEmpty) {
        return 0;
      }
      
      int first = stones.removeAt(0);
      int second = stones.removeAt(0);
      
      if (first != second) {
        stones.add((first - second).abs());
      }
    }
  }
}
```