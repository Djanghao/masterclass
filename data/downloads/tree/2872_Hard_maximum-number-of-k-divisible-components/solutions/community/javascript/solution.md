# JavaScript / Python / Kotlin - Regular ol' DFS

**Author:** ektegjetost
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/4110935/](https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/4110935/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- The sum of the whole tree is divisible by ```k```
- Therefore if you find a component divisible by ```k``` and remove it from the tree, the rest of the tree is divisible by ```k``` too.
- We have to break the tree up into components, we can't leave off / not count stray nodes 
- So if we do a postorder traversal, summing up the nodes of each subtree, we have a decision to make for each subtree about whether we break it off from the larger tree and create a component
  - if its sum is not divisible by ```k```, by the rules we can't disconnect it
  - if it is divisible by ```k```
    - we know if we remove it from the tree the rest of the nodes summed up will be divisible by ```k```
    - its remainder when divided by ```k``` is ```0``` - there's no way it can help some larger subtree reach a remainder of ```0```, so there's no point in not disconnecting it since it's at the smallest size it can be before disconnecting

# Approach
<!-- Describe your approach to solving the problem. -->
1. create an adjacency list
2. DFS postorder traversal
3. sum up the current node + all of its children's values and modulo ```k```
4. if the remainder of the current subtree is ```0```,  you've found a divisible component count it and return the remainder

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
JavaScript
```
var maxKDivisibleComponents = function(n, edges, values, k) {
  const adjList = edges.reduce((adjList, [a, b]) => {
    adjList[a].push(b);
    adjList[b].push(a);
    return adjList;
  }, values.map(() => []));

  let total = 0;
  const countComponents = (node, parent) => {
    const remainder = (
      values[node] + adjList[node]
        .reduce((sum, child) => sum + (child === parent ? 0 : countComponents(child, node)), 0)
    ) % k;

    if (remainder === 0) total += 1;
    return remainder;
  }

  countComponents(0, -1);
  return total;
};
```

Python
```
class Solution:
    def maxKDivisibleComponents(self, n: int, edges: List[List[int]], values: List[int], k: int) -> int:
        self.values = values
        self.total = 0
        self.k = k
        self.adj_list = [[] for i in range(n)]
        for a, b in edges:
            self.adj_list[a].append(b)
            self.adj_list[b].append(a)

        self.count_components(0, -1)
        return self.total

    def count_components(self, node, parent):
        remainder = (
            self.values[node]
            + sum(
                self.count_components(child, node)
                for child in self.adj_list[node]
                if child != parent
            )
        ) % self.k
        if remainder == 0: self.total +=1 
        return remainder
    
```

Kotlin
```kotlin
class Solution {
    fun maxKDivisibleComponents(n: Int, edges: Array<IntArray>, values: IntArray, k: Int): Int {
        val adjList = Array(n){ ArrayDeque<Int>() }
        edges.forEach {
            adjList[it[0]].add(it[1])
            adjList[it[1]].add(it[0])
        }
        var total = 0

        fun countComponents(node: Int, parent: Int): Int {
            val remainder = (
                values[node] + adjList[node].fold(0) {
                    sum, child -> if (child == parent) sum else sum + countComponents(child, node)
                }
            ) % k
            
            if (remainder == 0) total += 1
            return remainder
        }

        countComponents(0, -1)

        return total
    }

}
```