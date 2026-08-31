# Depth First Search with prune & cache [Swift]

**Author:** cl0ud_runner
**Votes:** 2
**Link:** [https://leetcode.com/problems/4-keys-keyboard/solutions/106002/](https://leetcode.com/problems/4-keys-keyboard/solutions/106002/)

---

similar to my [ 2 Keys Keyboard](https://discuss.leetcode.com/topic/97589/depth-first-search-swift) solution, but with prune & cache
```
class Solution {
    func maxA(_ N: Int) -> Int {
        var result = Int.min
        var cache = Set<String>()
        
        helper(N, 1, 0, 1, &result, &cache)
        
        return result        
    }
    
    fileprivate func helper(_ N: Int, _ steps: Int, _ buffer: Int, _ candidate: Int, _ result: inout Int, _ cache: inout Set<String>) {
        if steps > N {
            return
        }
        if steps == N {
            result = max(result, candidate)
            return
        }
        
        if cache.contains("\\(candidate):\\(buffer):\\(steps)") {
            return
        }
        
        if buffer > 1 {
            // Paste
            helper(N, steps + 1, buffer, candidate + buffer, &result, &cache)
        } else {
            // Print
            helper(N, steps + 1, buffer, candidate + 1, &result, &cache)
        }
        // Select + Copy + Paste
        helper(N, steps + 3, candidate, candidate * 2, &result, &cache)
        
        cache.insert("\\(candidate):\\(buffer):\\(steps)")
    }
}
```