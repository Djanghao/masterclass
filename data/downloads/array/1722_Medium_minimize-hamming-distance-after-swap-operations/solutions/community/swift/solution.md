# Swift - Use DFS to find connected components

**Author:** duyetnt
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/1982318/](https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/1982318/)

---

Let's consider `allowedSwaps = [[0, 1], [1, 2]]`, we notice that we can indirectly swap between `0 vs 2` by swapping `0 vs 1` then `1 vs 2`, which reminds us of finding the connected components of a graph problem.
* Each item in `allowedSwaps` can be considered as an edge --> build `graph` from the given `allowedSwaps`.
* For each node `i` in `graph`, run `dfs(i)` to put index `i` to the expected component/group.
* For each group we have got above, as we can freely swap any pair of `i, j` within a group, what we need to do is to find how many different pairs between `source` and `target` and update the result accordingly.

```swift
class Solution {
  func minimumHammingDistance(_ source: [Int], _ target: [Int], _ allowedSwaps: [[Int]]) -> Int {
    let n = source.count
    
    var graph = Array(repeating: [Int](), count: n)
    for swap in allowedSwaps {
      let i = swap[0], j = swap[1]
      graph[i].append(j)
      graph[j].append(i)
    }
    
    var visited = Set<Int>()
    var groups = [Int: Set<Int>]()
    func dfs(_ i: Int, _ parent: Int) {
      guard !visited.contains(i) else { return }
      
      visited.insert(i)
      groups[parent, default: []].insert(i)
      
      for j in graph[i] {
        dfs(j, parent)
      }
    }
    
    for i in 0..<n {
      dfs(i, i)
    }
    
    var res = 0
    for indices in groups.values {
      var counter = [Int: Int]()
      for i in indices {
        counter[source[i], default: 0] += 1
        counter[target[i], default: 0] -= 1
      }
      
      res += counter.values.reduce(0) { $0 + abs($1) } / 2
    }
    
    return res
  }
}
// Time complexity: O(n) where n = source.count
// Space complexity: O(n)
```