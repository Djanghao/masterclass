# Swift - DFS

**Author:** duyetnt
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/1957039/](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/1957039/)

---

This question is quite similar to https://leetcode.com/problems/binary-tree-maximum-path-sum/ so we can apply the same approach with some slight modifications:

* Build the `tree` from the given `parent` array in which `tree[i]` represents the children of node `i`
* Visit each node `i`, do the following steps:
	* Find the two best paths (`longestPath` & `secondLongestPath`) starting from each child in `tree[i]` that satisfy the requirement. Then check if the path formed by `longestPath --> i --> secondLongestPath` can lead to the maximum value we're finding and update the global `res` accordingly.
	* Return `1 + longestPath` as the result denoting the longest path that satisfies the requirement starting from node `i` so that its parent can take into consideration.

```swift
class Solution {
  func longestPath(_ parent: [Int], _ s: String) -> Int {
    let arr = Array(s)
    let n = arr.count
    
    var tree = Array(repeating: [Int](), count: n)
    for i in 0..<n where parent[i] != -1 {
      tree[parent[i]].append(i)
    }
    
    var res = 0 
    func dfs(_ i: Int) -> Int {
      var (longestPath, secondLongestPath) = (0, 0)
      for j in tree[i] {
        let path = dfs(j)
        
        guard arr[i] != arr[j] else { continue }
        
        if path > longestPath {
          secondLongestPath = longestPath
          longestPath = path
        } else if path > secondLongestPath {
          secondLongestPath = path
        }
      }
      
      res = max(res, 1 + longestPath + secondLongestPath)
      return 1 + longestPath
    }
    
    dfs(0)
    
    return res 
  }
}

// Time complexity: O(n)
// Space complexity: O(n)
```

