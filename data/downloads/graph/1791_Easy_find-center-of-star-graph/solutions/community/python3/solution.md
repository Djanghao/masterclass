# 💯✅🔥Easy Java ,Python3 ,C++ Solution|| 0 ms ||≧◠‿◠≦✌

**Author:** suyalneeraj09
**Votes:** 73
**Link:** [https://leetcode.com/problems/find-center-of-star-graph/solutions/5374686/](https://leetcode.com/problems/find-center-of-star-graph/solutions/5374686/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this solution is that in a star graph, all the edges are connected to a single central node. Therefore, if we look at the first two edges, the central node will be present in both of them. We can use this property to find the center of the star graph.

---

# Approach
<!-- Describe your approach to solving the problem. -->
The approach used in the given code is to check if the first element of the first edge is present in the second edge. If it is, then the first element of the first edge is the center of the star graph. If not, then the second element of the first edge is the center of the star graph.

---
# Complexity
- Time complexity:O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
---
# Code
```java []
class Solution {
    public int findCenter(int[][] e) {
    return e[0][0] == e[1][0] || e[0][0] == e[1][1] ? e[0][0] : e[0][1];
}
}
```
```python3 []
class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        return edges[0][0] if edges[0][0] in edges[1] else edges[0][1]
```
```C++ []
class Solution {
public:
    int findCenter(vector<vector<int>>& e) {
    return e[0][0] == e[1][0] || e[0][0] == e[1][1] ? e[0][0] : e[0][1];
}
};
```
---
![upvote.png](./images/0.png)

