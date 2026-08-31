# Good problem just use max & min method

**Author:** shahinurcoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5646389/](https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5646389/)

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

 int maxDistance(List<List<int>> arrays) {
  int minElement = arrays[0].first;
  int maxElement = arrays[0].last;
  int maxDistance = 0;

  for (int i = 1; i < arrays.length; i++) {
    int currentMin = arrays[i].first;
    int currentMax = arrays[i].last;


    maxDistance= max(maxDistance, (maxElement - currentMin).abs());
    maxDistance = max(maxDistance, (currentMax - minElement).abs());

    minElement = min(minElement, currentMin);
    maxElement = max(maxElement, currentMax);
  }

  return maxDistance;
}

    
  }

```