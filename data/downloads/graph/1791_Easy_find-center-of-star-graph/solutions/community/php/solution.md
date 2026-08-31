# [Graph + Observation Tutorial] Find Center of Star Graph

**Author:** never_get_piped
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-center-of-star-graph/solutions/5374904/](https://leetcode.com/problems/find-center-of-star-graph/solutions/5374904/)

---

**Topic** :  Graph, Observation
___

## Solution
We first note that the given input is always valid, indicating it forms a star graph where there exists exactly one central node connected by `n - 1` edges.

The center node appears in each edge, so we can simply compare the nodes of the first and second edges to identify the common node, which serves as the center.

```c++ []
class Solution {
public:
    int findCenter(vector<vector<int>>& edges) {
        if(edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]) {
            return edges[0][0];
        }   
        return edges[0][1];
    }
};
```
```java []
class Solution {
    public int findCenter(int[][] edges) {
        if (edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]) {
            return edges[0][0];
        }
        return edges[0][1];
    }
}
```
```python []
class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        if edges[0][0] == edges[1][0] or edges[0][0] == edges[1][1]:
            return edges[0][0]
        return edges[0][1]
```
```Go []
func findCenter(edges [][]int) int {
    if edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1] {
        return edges[0][0]
    }
    return edges[0][1]
}
```
```PHP []
class Solution {

    /**
     * @param Integer[][] $edges
     * @return Integer
     */
    function findCenter($edges) {
        if ($edges[0][0] == $edges[1][0] || $edges[0][0] == $edges[1][1]) {
            return $edges[0][0];
        }
        return $edges[0][1];
    }
}
```
```javascript []
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    if (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) {
        return edges[0][0];
    }
    return edges[0][1];
};
```

**Complexity**:
* Time Complexity : `O(1)`
* Space Complexity : `O(1)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**