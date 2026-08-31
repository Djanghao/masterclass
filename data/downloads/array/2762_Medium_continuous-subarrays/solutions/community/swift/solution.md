# Swift💯

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/continuous-subarrays/solutions/6144553/](https://leetcode.com/problems/continuous-subarrays/solutions/6144553/)

---

**Heap (accepted answer)**
```
import Collections
struct HeapElem: Comparable {
    let i:Int, val:Int
    static func <(l:Self,r:Self)->Bool {l.val < r.val}
}
class Solution {
    func continuousSubarrays(_ nums: [Int]) -> Int {
        var heap = Heap<HeapElem>(), left = 0
        
        return nums.enumerated()
            .map { right, val in
                heap.insert(HeapElem(i:right, val:val))
                while left < right, nums[heap.max!.i] - nums[heap.min!.i] > 2 {
                    while let i = heap.max?.i, i <= left { heap.popMax() }
                    while let i = heap.min?.i, i <= left { heap.popMin() }
                    left += 1
                }
                return right - left + 1
            }
            .reduce(0,+)
    }
}
```