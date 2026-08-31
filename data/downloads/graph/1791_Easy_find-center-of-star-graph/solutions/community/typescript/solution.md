# 🥷🏻🔥 99% beats Go, Typescript, PHP, Javascript 🔥🥷🏻

**Author:** samandareshmamatov
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-center-of-star-graph/solutions/5375527/](https://leetcode.com/problems/find-center-of-star-graph/solutions/5375527/)

---

# Code
```PHP []
class Solution {

    /**
     * @param Integer[][] $edges
     * @return Integer
     */
    function findCenter($edges) {
        return ($edges[0][0] == $edges[1][0] || $edges[0][0] == $edges[1][1]) ? $edges[0][0] : $edges[0][1];
    }
}
```
```Go []
func findCenter(edges [][]int) int {
    if edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1] {
        return edges[0][0]
    }
    return edges[0][1];
}
```
```Typescript []
function findCenter(edges: number[][]): number {
    return (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1])  ? edges[0][0] : edges[0][1];
};
```
```Javascript []
function findCenter(edges) {
    return (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1])  ? edges[0][0] : edges[0][1];
};
```
