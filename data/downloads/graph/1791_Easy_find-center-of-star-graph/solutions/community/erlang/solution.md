# O(1) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-center-of-star-graph/solutions/5375423/](https://leetcode.com/problems/find-center-of-star-graph/solutions/5375423/)

---

# Complexity
- Time complexity:$$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
final class Solution {
    public int findCenter(final int[][] edges) {
        if (edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]) return edges[0][0]; 
        else return edges[0][1];
    }
}
```
```python []
class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        return edges[0][0] if edges[0][0] == edges[1][0] or edges[0][0] == edges[1][1] else edges[0][1]
```
```rust []
impl Solution {
    pub fn find_center(edges: Vec<Vec<i32>>) -> i32 {
        if edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1] {edges[0][0]} else {edges[0][1]}
    }
}
```
``` c []
int findCenter(const int** edges, const int edgesSize, const int* edgesColSize) {
    if (edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]) return edges[0][0]; 
    else return edges[0][1];
}
```
``` Erlang []
-spec find_center(Edges :: [[integer()]]) -> integer().
find_center([[A, _], [A, _] | _]) -> A;
find_center([[A, _], [_, A] | _]) -> A;
find_center([[_, B]         | _]) -> B.
```
``` Elixir []
defmodule Solution do
  @spec find_center(edges :: [[integer]]) :: integer
  def find_center([[a, _], [a, _]| _]), do: a
  def find_center([[a, _], [_, a]| _]), do: a
  def find_center([[_, b]        | _]), do: b
end
```
