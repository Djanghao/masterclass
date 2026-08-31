# [Swift] simple solution by sorting and keeping top 3 neighbours

**Author:** GV1506
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-of-a-node-sequence/solutions/1956803/](https://leetcode.com/problems/maximum-score-of-a-node-sequence/solutions/1956803/)

---

```
class Solution {
    func maximumScore(_ scores: [Int], _ edges: [[Int]]) -> Int {
        let n = scores.count
        var map = Array(repeating: [Int](), count: n)
        
        for e in edges {
            map[e[0]].append(e[1])  
            map[e[1]].append(e[0])            
        }
        
        for i in 0..<n { 
            var arr = map[i].sorted(by: {
                scores[$0] > scores[$1]
            })
            if arr.count > 3 {
                arr = Array(arr[0..<3])
            }
            map[i] = arr
        }
        
        var ans = -1
        for e in edges {
            let a = e[0]
            let b = e[1]
            for x in map[a] {
                for y in map[b] {
                    if x != y, x != b, y != a, ans < scores[a] + scores[b] + scores[x] + scores[y] {
                        ans = scores[a] + scores[b] + scores[x] + scores[y]
                    }
                }
            }
        }
        return ans
    }
}
```