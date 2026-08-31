# Swift DFS

**Author:** jingjing2010
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-pattern-ii/solutions/3627106/](https://leetcode.com/problems/word-pattern-ii/solutions/3627106/)

---

# Intuition
dfs + cache

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func wordPatternMatch(_ pattern: String, _ s: String) -> Bool {
        var p = Array(pattern)
        var strs = Array(s)
        var map = [String: String]()
        var visited = [String: String]()

        func helper(_ p: [Character], _ strs: [Character], _ pidx: Int, _ sidx: Int) -> Bool {
            if pidx == p.count && sidx == strs.count { 
                return true 
            } else if pidx == p.count || sidx == strs.count { 
                return false 
            }

            let c = String(p[pidx])
            for i in sidx..<strs.count {
                let str = String(strs[sidx...i])
                if map[c] == nil && visited[str] == nil {
                    map[c] = str
                    visited[str] = c
                    if helper(p, strs, pidx + 1, i + 1) {
                        return true
                    }
                    map.removeValue(forKey: c)
                    visited.removeValue(forKey: str)
                } else if map[c] == str && visited[str] == c {
                    if helper(p, strs, pidx + 1, i + 1) {
                        return true
                    }
                }
            }
            return false
        }
        
        return helper(p, strs, 0, 0)
    }
}
```