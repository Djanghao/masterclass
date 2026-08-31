# DFS Swift

**Author:** artemvor1997
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/3277762/](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/3277762/)

---


```
class Solution {
    func numberOfWays(_ startPos: Int, _ endPos: Int, _ k: Int) -> Int {
        var cache = [[Int]: Int]()
        func dfs(_ pos: Int, _ steps: Int) -> Int {
            if steps > k {return 0}
            if pos == endPos && steps == k {return 1}
            if let val = cache[[pos, steps]] {return val}
            
            let res = dfs(pos+1, steps+1) + dfs(pos-1, steps+1)
            cache[[pos, steps]] = res
            return res % Int(1e9+7)
        }
        return dfs(startPos, 0)
    }
}
```