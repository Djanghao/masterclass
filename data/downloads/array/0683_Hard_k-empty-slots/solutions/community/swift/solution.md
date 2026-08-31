# Swift solution using Binary Index Tree with explanation

**Author:** mmovses
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-empty-slots/solutions/2826616/](https://leetcode.com/problems/k-empty-slots/solutions/2826616/)

---

Prerequisite for this is you already understand Binary Index Tree. Init the BIT with 0s and for every day set 1s for bulbs. As we place a new bulb there are 2 candidates to match the requirement at `todaysBulbIndex - k - 1` and `todaysBulbIndex + k + 1`, as soon as we encounter one we are done and can return the current day... so problem boils down to efficiently detecting whethere these canditates match the condition on each iteration and that's where the power of BIT comes. For the left candidate check `rangeSum(todaysBulbIndex - k - 1, todaysBulbIndex)` and `rangeSum(todaysBulbIndex - k, todaysBulbIndex)` and if they are 2 and 1 correspondingly then we can infer there were no other bulbs in between. Do same for the candidate on the right side.
I'm sure there are more efficient solutions, but for whatever reason this is first thing that came to mind and easily passed as I believe it has O(nlogn) complexity. 

```
class Solution {
    
    func kEmptySlots(_ bulbs: [Int], _ k: Int) -> Int {
        var bit = BIT(Array(repeating: 0, count: bulbs.count))
        for day in bulbs.indices {
            let pos = bulbs[day] &- 1
            bit.update(pos, 1)
            let leftCandidateIndex = pos &- k &- 1
            if leftCandidateIndex >= 0 {
                let sum = bit.rangeSum(leftCandidateIndex, pos)
                let sumUpTo = bit.rangeSum(leftCandidateIndex &+ 1, pos)
                if sum == 2 && sumUpTo == 1 {
                    return day + 1
                }
            } 
            let rightCandidateIndex = pos &+ k &+ 1
            if rightCandidateIndex < bulbs.count {
                let sum = bit.rangeSum(pos, rightCandidateIndex)
                let sumUpTo = bit.rangeSum(pos, rightCandidateIndex &- 1)
                if sum == 2 && sumUpTo == 1 {
                    return day + 1
                }
            } 
        }
        return -1
    }
    
    struct BIT {
        var bit: [Int]
        
        init(_ array: [Int]) {
            bit = array
            bit.insert(0, at: 0)
        }
        
        mutating func add(_ i: Int, _ delta: Int) {
            var i = i + 1
            while i < bit.count {
                bit[i] &+= delta
                i = childOf(i)
            }
        }

        mutating func update(_ i: Int, _ val: Int) {
            let diff = val &- get(i)
            add(i, diff)
        }

        func subRange(_ i: Int) -> Int {
            var i = i + 1
            var sum = 0
            while i > 0 {
                sum &+= bit[i]
                i = parentOf(i)
            }
            return sum
        }

        func get(_ i: Int) -> Int {
            return subRange(i) &- subRange(i &- 1)
        }

        func rangeSum(_ left: Int, _ right: Int) -> Int {
            return subRange(right) &- subRange(left &- 1)
        }

        func childOf(_ i: Int) -> Int {
            return i &+ (i & (-i))
        }

        func parentOf(_ i: Int) -> Int {
            return i &- (i & (-i))
        }
    }
}
```