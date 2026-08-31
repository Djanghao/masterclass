# 🚀 Easy Solution in [ALL LANUAGES] to Find the Center of a Star Graph 🌟 (Beats 100%)

**Author:** santhosh_kumar_13
**Votes:** 24
**Link:** [https://leetcode.com/problems/find-center-of-star-graph/solutions/5374953/](https://leetcode.com/problems/find-center-of-star-graph/solutions/5374953/)

---

Hi LeetCoders! \uD83C\uDF1F Today, I\u2019m sharing a super simple and efficient solution to find the center of a star graph. \uD83D\uDE80 This solution runs in constant time, O(1), and is very easy to understand. Let\u2019s dive in! \uD83C\uDFCA\u200D\u2642\uFE0F

Problem Statement \uD83D\uDCDC
Given an array of edges that represent a star graph, we need to find the center node. The center node is the one that is connected to all other nodes. \uD83C\uDF10
# Example \uD83C\uDF1F
```
Input: edges = [[1,2],[2,3],[4,2]]
Output: 2
Explanation: Node 2 is connected to every other node, so 2 is the center.
```

### Solution Approach \uD83E\uDDE0
In a star graph, the center node will appear in both of the first two edges. So, we just need to check the common node in these two edges. \u2728

### Code \uD83D\uDDA5\uFE0F

```java []
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
```python []
class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        if edges[0][0] == edges[1][0] or edges[0][0] == edges[1][1]:
            return edges[0][0]
        else:
            return edges[0][1]

```
```c++ []
class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        if edges[0][0] == edges[1][0] or edges[0][0] == edges[1][1]:
            return edges[0][0]
        else:
            return edges[0][1]

```
```ruby []
def find_center(edges)
    if edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]
        edges[0][0]
    else
        edges[0][1]
    end
end

```
```javascript []
var findCenter = function(edges) {
    if (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) {
        return edges[0][0];
    } else {
        return edges[0][1];
    }
};

```
```go []
func findCenter(edges [][]int) int {
    if edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1] {
        return edges[0][0]
    } else {
        return edges[0][1]
    }
}

```
![7abc56.jpg](./images/0.jpeg)
