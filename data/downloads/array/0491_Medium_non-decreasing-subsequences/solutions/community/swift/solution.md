# Swift | One-Liner

**Author:** OrchidHunter
**Votes:** 3
**Link:** [https://leetcode.com/problems/non-decreasing-subsequences/solutions/3074834/](https://leetcode.com/problems/non-decreasing-subsequences/solutions/3074834/)

---

**See Also:** Faster implementations for this problem [Two Approaches: DFS, Bitmask](https://leetcode.com/problems/non-decreasing-subsequences/discuss/3074884/Swift-or-Two-Approaches%3A-DFS-and-Bitmasks)

---

**One-Liner, terse (accepted answer)**
```
class Solution {
    func findSubsequences(_ n: [Int]) -> [[Int]] {
        Set((2..<1<<n.count).map{b in n.indices.filter{b&1<<$0>0}.reduce(into: [Int]()) {p,i in if n[i] >= p.last ?? -100 {p+=[n[i]]}}}).filter{$0.count>1}
    }
}
```

---
**One-Liner, expanded and annotated (accepted answer)**
```
class Solution {
    func findSubsequences(_ nums: [Int]) -> [[Int]] {
        Set(
            (2 ..< (1 << nums.count)).map{ bits in // generate every bit mask for two or more elements in `nums`
                nums.indices // index is used to both index elements in `nums` and index bits in the bit mask 
                .filter { index in bits & (1<<index) > 0 } // filter out indices that are not in the bit mask
                .reduce(into: [Int]()) { partialResult, index in 
                    // if bitmasked array element is non-decreasing, add it
                    if partialResult.isEmpty || nums[index] >= partialResult.last! { 
                        partialResult.append(nums[index])
                    }
                }
            }
        )
		// finally, filter out elements that are too small 
        .filter { partialResult in partialResult.count > 1 } 
    }
}
```