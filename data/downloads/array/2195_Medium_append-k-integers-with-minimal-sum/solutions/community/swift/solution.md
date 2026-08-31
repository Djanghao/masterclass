# Swift Solution

**Author:** sagarthecoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/1837458/](https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/1837458/)

---

```
class Solution {
    func nthSum(_ from : Int, _ to : Int)-> Int {
        if from > to {
            return 0
        }
       // print("from = \\(from), to = \\(to)")
        let total = (to * (to + 1)) / 2
        let partial = (from * (from + 1)) / 2
        return total - partial + from
    }
    func minimalKSum(_ nums: [Int], _ givenK: Int) -> Int {
        var sum = 0
        var k = givenK
        var capacity = nums.count
        var sortedNums = nums.sorted { (lhs, rhs) in
            return lhs < rhs
        }
        
        var firstGap = min(sortedNums[0] - 1, k)
        k -= firstGap
        sum += nthSum(0, firstGap)
        var i = 1
        while(i < capacity && k > 0) {
            let gap = min(sortedNums[i] - sortedNums[i - 1] - 1, k)
            if(gap > 0) {
                sum += nthSum(sortedNums[i - 1] + 1, sortedNums[i - 1] + gap)
                 k -= gap
            }
            i += 1
        }
        if(k > 0) {
            sum += nthSum(sortedNums[capacity - 1] + 1, sortedNums[capacity - 1] + k)
            k = 0
        }
        return sum
    }
}
```