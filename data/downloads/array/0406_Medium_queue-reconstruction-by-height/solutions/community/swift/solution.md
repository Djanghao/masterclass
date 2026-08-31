# [Swift] solution with explanation

**Author:** GV1506
**Votes:** 3
**Link:** [https://leetcode.com/problems/queue-reconstruction-by-height/solutions/481650/](https://leetcode.com/problems/queue-reconstruction-by-height/solutions/481650/)

---

```
class Solution {
    func reconstructQueue(_ people: [[Int]]) -> [[Int]] {
        // 1. If we insert a person to a queue of higher people, it doesn't affect the queue. 
        //    We can insert the shortest person at any index. So the shorter person will be added later.
        // 2. If A and B are the same height. The fewer people in front of is added first.
        
        //    [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]] 
        // -> [[7,0],[7,1],[6,1],[5,0],[5,2],[4,4]]
        let sortedArray = people.sorted(by: {
            // sort number of higher people in front of (ascending order)
            if $0[0] == $1[0] {
                return $0[1] < $1[1]
            }
            // height in descending order
            return $0[0] > $1[0]
        })
        
        var result = [[Int]]()
        for p in sortedArray {
            result.insert(p, at: p[1])
        }
        
        return result
    }
}
```