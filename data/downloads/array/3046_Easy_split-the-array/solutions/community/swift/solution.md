# ✅ 5 Variations

**Author:** eleev
**Votes:** 2
**Link:** [https://leetcode.com/problems/split-the-array/solutions/4781295/](https://leetcode.com/problems/split-the-array/solutions/4781295/)

---

# Solutions
```Swift []
final class Solution {
    @_optimize(speed)
    func isPossibleToSplit(_ nums: [Int]) -> Bool {
        nums.withUnsafeBufferPointer {
            var freqs = ContiguousArray<UInt8>(repeating:0, count: 101)
            for num in $0 {
                freqs[num] += 1
                if freqs[num] > 2 { return false }    
            }
            return true
        }
    }
}

```
```Swift []
final class Solution {
    @_optimize(speed)
    func isPossibleToSplit(_ nums: [Int]) -> Bool {
        var freqs = ContiguousArray<UInt8>(repeating:0, count: 101)
        
        for num in nums {
            freqs[num] += 1
            if freqs[num] > 2 { return false }
        }
        return true
    }
}
```
```Swift []
final class Solution {
    @_optimize(speed)
    func isPossibleToSplit(_ nums: [Int]) -> Bool {
        var freqs = [Int: UInt8]()
        freqs.reserveCapacity(101)

        for num in nums {
            freqs[num, default: 0] += 1
            if freqs[num] > 2 { return false}
        }
        return true
    }
}
```
```Swift []
final class Solution {
    @_optimize(speed)
    func isPossibleToSplit(_ nums: [Int]) -> Bool {
        nums.lazy
            .reduce(into: [Int: UInt8]()) { $0[$1, default: 0] += 1 }
            .values.first(where: { $0 > 2 }) ?? 0 == 0
    }
}
```
```Swift []
final class Solution {
    @_optimize(speed)
    func isPossibleToSplit(_ nums: [Int]) -> Bool {
        Dictionary(nums.map { ($0, 1) }, uniquingKeysWith: +)
            .values.first(where: { $0 > 2 }) ?? 0 == 0
    }
}
```