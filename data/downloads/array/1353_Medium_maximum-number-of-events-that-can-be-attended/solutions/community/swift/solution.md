# [Swift] solution with sorting

**Author:** GV1506
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/510528/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/510528/)

---

```
class Solution {
    func maxEvents(_ events: [[Int]]) -> Int {
        
        //sort [[1,4],[4,4],[2,2],[3,4],[1,1]] to [[1,1], [2,2], [1,4], [3,4], [4,4]]
        var events = events
        events.sort(by: {
            if $0[1] == $1[1] { return $0[0] < $1[0] }
            return $0[1] < $1[1]
        })
        print(events)
        
        var set: Set<Int> = []
        for event in events {
            let start = event[0]
            let end = event[1]
            
            var i = start
            while set.contains(i) == true, i <= end {
                i += 1
            }
            if set.contains(i) == false, i <= end {
                set.insert(i)
            }
        }
        
        return set.count
    }
}
```