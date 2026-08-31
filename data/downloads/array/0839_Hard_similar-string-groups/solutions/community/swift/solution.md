# [Swift] DFS & BFS Solution

**Author:** alptekin35
**Votes:** 5
**Link:** [https://leetcode.com/problems/similar-string-groups/solutions/532163/](https://leetcode.com/problems/similar-string-groups/solutions/532163/)

---

```
class Solution {
    func numSimilarGroups(_ A: [String]) -> Int {
        var visited = Array(repeating: false, count: A.count)
        var res = 0
        var chars:[[Character]] = []
        for item in A{
            chars.append(Array(item))
        }
        for i in 0..<chars.count{
            if visited[i] == true { continue }
            res += 1
            visited[i] = true
            //bfs(chars, chars[i], &visited)
            dfs(chars, chars[i], &visited)
        }
        return res
    }
    
    func bfs(_ chars: [[Character]], _ item:[Character],_ visited:inout[Bool]){
        var queue:[[Character]] = []
        queue.append(item)
        while !queue.isEmpty{
            let curr = queue.removeFirst()
            for i in 0..<chars.count{
                if visited[i] == true { continue }
                let diff = findDiff(chars[i], curr)
                if diff == 0 {visited[i] = true} // Equal
                if diff == 2{
                    visited[i] = true
                    queue.append(chars[i])
                }
            }
        }
    }
    
    func dfs(_ chars: [[Character]], _ item:[Character],_ visited:inout[Bool]){
        for i in 0..<chars.count{
            if visited[i] == true { continue }
            let diff = findDiff(chars[i], item)
            if diff == 0 {visited[i] = true} // Equal
            if diff == 2{
                visited[i] = true
                dfs(chars, chars[i], &visited)
            }
        }
    }
    
    func findDiff(_ arr1:[Character],_ arr2:[Character])->Int{
        var count = 0
        for i in 0..<arr1.count{
            if arr1[i] != arr2[i]{
                count += 1
            }
        }
        return count
    }
}
```