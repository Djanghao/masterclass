# Swift | One-Liner

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3235198/](https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3235198/)

---

**One-Liner, terse (accepted answer)**
```
class Solution {
    func maxNumOfMarkedIndices(_ n: [Int]) -> Int {
        ((n.count+1)/2..<n.count).reduce(into: (0, n.sorted())) {$0.0 += $0.1[$0.0]*2<=$0.1[$1] ? 1:0}.0*2
    }
}
```

----

**One-Liner, expanded and annnotated (accepted answer)**
```
class Solution {
    func maxNumOfMarkedIndices(_ nums: [Int]) -> Int {
        ((nums.count+1)/2..<nums.count).reduce(into: (
            result: 0, 
            nums: nums.sorted()
        )) { data, num in 
            data.result += data.nums[data.result]*2 <= data.nums[num] ? 1:0
        }.result * 2
    }
}
```
