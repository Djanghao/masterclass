# Beats 82.35%, DFS

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/matchsticks-to-square/solutions/5467413/](https://leetcode.com/problems/matchsticks-to-square/solutions/5467413/)

---


```
class Solution {
    func makesquare(_ matchsticks: [Int]) -> Bool {
        func dfs(_ ind: Int) -> Bool{
            if ind == arr.count{
                return true
            }
            
            // if !dict[edges, default: true] {
            //     return false
            // }
            
            for i in 0..<edges.count{
                if i > 0 && edges[i - 1] == edges[i] {
                    continue
                }

                edges[i] += arr[ind]
                
                if edges[i] <= len && dfs(ind + 1){
                    return true
                }
                
                // dict[edges] = false

                edges[i] -= arr[ind]
            }

            return false
        }

        var summ = 0
        matchsticks.forEach({summ += $0})
        var len = summ / 4
        if summ % 4 != 0 || matchsticks.count < 4{ return false }

        var edges = [0,0,0,0]
        var arr = matchsticks.sorted(by: >)
        // var dict = [[Int]: Bool]()

        return dfs(0)
    }
}
```