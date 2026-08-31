# O(1) | 1-liner

**Author:** votrubac
**Votes:** 357
**Link:** [https://leetcode.com/problems/find-center-of-star-graph/solutions/1108319/](https://leetcode.com/problems/find-center-of-star-graph/solutions/1108319/)

---

Reading the description carefully helps here. Basically, a center node must appear in every edge.
    
**C++**
```cpp
int findCenter(vector<vector<int>>& e) {
    return e[0][0] == e[1][0] || e[0][0] == e[1][1] ? e[0][0] : e[0][1];
}
```
    
**Java**
```java
public int findCenter(int[][] e) {
    return e[0][0] == e[1][0] || e[0][0] == e[1][1] ? e[0][0] : e[0][1];
}
```
