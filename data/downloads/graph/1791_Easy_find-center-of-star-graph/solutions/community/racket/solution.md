# ✅ O(1) solution

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-center-of-star-graph/solutions/5378279/](https://leetcode.com/problems/find-center-of-star-graph/solutions/5378279/)

---

# Intuition
In star graph, all nodes are linked to the center. So we need to count the edges, or more precisely, we need to check only two nodes to find the center node. The center node will be mentioned twice.

# Code
``` java []
class Solution {
    public int findCenter(int[][] edges) {
        if (edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]) {
            return edges[0][0];
        } else {
            return edges[0][1];
        }
    }
}
```
``` python []
class Solution(object):
    def findCenter(self, edges):
        if edges[0][0] == edges[1][0] or edges[0][0] == edges[1][1]:
            return edges[0][0]
        else:
            return edges[0][1]
```
``` c []
int findCenter(int** edges, int edgesSize, int* edgesColSize) {
    if (edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]) {
        return edges[0][0];
    } else {
        return edges[0][1];
    }
}
```
``` javascript []
var findCenter = function(edges) {
    if (edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]) {
        return edges[0][0];
    } else {
        return edges[0][1];
    }
};
```
``` php []
class Solution {
    function findCenter($edges) {
        if ($edges[0][0] == $edges[1][0] || $edges[0][0] == $edges[1][1]) {
            return $edges[0][0];
        } else {
            return $edges[0][1];
        }
    }
}
```
``` golang []
func findCenter(edges [][]int) int {
    if edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1] {
        return edges[0][0]
    } else {
        return edges[0][1]
    }
}
```
``` rust []
impl Solution {
    pub fn find_center(edges: Vec<Vec<i32>>) -> i32 {
        if edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1] {
            return edges[0][0];
        } else {
            return edges[0][1];
        }
    }
}
```
``` ruby []
def find_center(edges)
    edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1] ? edges[0][0] : edges[0][1]
end
```
``` racket []
(define (find-center edges)
    (match edges
        [(list (list u0 v0) (list u1 v1) _ ...) #:when (or (= u0 u1) (= u0 v1)) u0]
        [(list (list u0 v0) _ ...) v0]))
```