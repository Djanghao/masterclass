# Dart[x];

**Author:** 0varun
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/4341435/](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/4341435/)

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
  int minimumCost(List<int> cost) {
    int sum = 0;
    cost.sort((a, b) => b.compareTo(a));

    for (int i = 0; i < cost.length; i++) {
      if ((i + 1) % 3 == 0) {
        cost[i] = 0;
      }
      sum += cost[i];
    }

    return sum;
  }
}


```