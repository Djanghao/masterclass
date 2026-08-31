# dart solution 100 % efficient

**Author:** NiyasBasheer
**Votes:** 0
**Link:** [https://leetcode.com/problems/eliminate-maximum-number-of-monsters/solutions/4258856/](https://leetcode.com/problems/eliminate-maximum-number-of-monsters/solutions/4258856/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:389ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:199.66MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int eliminateMaximum(List<int> dist, List<int> speed) {
    int n = dist.length;
    List<double> timeToCity = List<double>.filled(n, 0.0);
    
    for (int i = 0; i < n; ++i) {
      timeToCity[i] = dist[i] / speed[i];
    }
    
    timeToCity.sort();
    
    for (int i = 0; i < n; ++i) {
      if (timeToCity[i] <= i) {
        return i;
      }
    }
    
    return n;
  }
}

```