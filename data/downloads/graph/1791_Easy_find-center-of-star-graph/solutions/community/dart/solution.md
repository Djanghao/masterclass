# Dart Solution

**Author:** 8hQubQgYlX
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-center-of-star-graph/solutions/5379416/](https://leetcode.com/problems/find-center-of-star-graph/solutions/5379416/)

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
  int findCenter(List<List<int>> edges) {
    if (edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]){
        return edges[0][0];
    } else {
        return edges[0][1];
    }
  }
}
```