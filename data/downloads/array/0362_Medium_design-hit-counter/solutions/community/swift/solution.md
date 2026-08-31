# Swift O(Log n) (Binary Search)

**Author:** enicolaev
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-hit-counter/solutions/1793660/](https://leetcode.com/problems/design-hit-counter/solutions/1793660/)

---

```
class HitCounter {
    private var hits: [Int] = []
    private var left: Int = 0
    
    init() {}
    
    func hit(_ timestamp: Int) {
        hits.append(timestamp)
    }
    
    func getHits(_ timestamp: Int) -> Int {
        guard !hits.isEmpty else { return 0 }
        guard left < hits.count else { return 0 }
        
        let searchTime = timestamp - 300
        if searchTime < hits[left] {
            return hits.count - left
        } else {
            var r = hits.count - 1
            
            while left <= r {
                let m = (r + left) / 2
                if hits[m] > searchTime {
                    r = m - 1
                } else {
                    left = m + 1
                }
            }
            
            return hits.count - left
        }
    }
}
```