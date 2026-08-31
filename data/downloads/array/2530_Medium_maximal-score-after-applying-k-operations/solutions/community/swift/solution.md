# Swift💯Heap

**Author:** OrchidHunter
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5909245/](https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5909245/)

---

**Good Interview Answer (accepted answer)**
```
import Collections

class Solution {
    func maxKelements(_ nums: [Int], _ k: Int) -> Int {
        var heap = Heap(nums)
        var score = 0
        for _ in 0 ..< k {
            score += heap.max!
            heap.insert((heap.popMax()!+2)/3)
        }
        return score
    }
}
```
Heap documentation: [https://github.com/apple/swift-collections/blob/main/Documentation/Heap.md](https://github.com/apple/swift-collections/blob/main/Documentation/Heap.md)