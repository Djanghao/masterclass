# DFS

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-arrangement/solutions/5374084/](https://leetcode.com/problems/beautiful-arrangement/solutions/5374084/)

---


```
class Solution {
    func countArrangement(_ n: Int) -> Int {
        func dfs(_ ind: Int){
            if ind >= n + 1 {
                ans += 1
                return
            }
            for i in 1...n {
                if visited[i] { continue}
                if arr[i] % ind == 0 || ind % arr[i] == 0 {
                    visited[i] = true
                    dfs(ind + 1)
                    visited[i] = false
                }
            }
        }

        var arr = [Int]()
        var visited = Array(repeating: false, count: n + 1)
        var ans = 0
        for i in 0...n {arr.append(i)}
        
        dfs(1)

        return ans
    }
}

```