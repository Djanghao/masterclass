# Swift🔥

**Author:** OrchidHunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5406070/](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5406070/)

---

**Sorted Array (accepted answer)**
```
class Solution {
    func minDifference(_ nums: [Int]) -> Int {
        guard nums.count > 4 else { return 0 }
        let nums = nums.sorted()
        return zip(nums.suffix(4), nums).map(-).min()!
    }
}
```

**Heap (accepted answer)**
```
import Collections

class Solution {
    func minDifference(_ nums: [Int]) -> Int {
        guard nums.count > 4 else { return 0 }
        var heap = Heap(nums)
        let mins = (0..<4).map{_ in heap.popMin()!}
        var underflow = mins
        let maxs = (0..<4).map{_ in heap.popMax() ?? underflow.popLast()!}
        return zip(maxs, mins.reversed()).map(-).min()!
    }
}
```

**Intuition**
We basically need to evaluate four cases: 
	1) remove 3 min values and 0 min values
	2) remove 2 min values and 1 max value
	3) remove 1 min value and 2 max values
	4) remove 0 min values and 3 max values

After removing `n` min values and `3-n` max values, we caluculate the next min and max value in the array in each of the four cases and return the minimum difference.

Edge case: Any input `nums.count` <= 4 will alway return zero, so trivial accept at start.

Approach: 
1) Determine the four cases from a sorted array
2) Determine the four cases from a heap structure

Implementation of either approach is straightforward.