# Swift | Prefix Sum + Binary Search

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/3395436/](https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/3395436/)

---

**Prefix Sum + Binary Search (accepted answer)**
```
class Solution {
    func minOperations(_ nums: [Int], _ queries: [Int]) -> [Int] {
        let nums = nums.sorted()
        let prefixSums = nums.reduce(into: [0]) { $0.append($1 + $0.last!) }
        
        return queries.map { q in 
            var (left, right) = (0, nums.count)
            while left < right {
                let mid = (left+right)/2
                (left, right) = nums[mid] > q ? (left, mid) : (mid+1, right)
            }
            let totalAmountBelowAverage = q * left - prefixSums[left]
            let totalAmountAboveAverage = prefixSums.last! - prefixSums[left] - q * (nums.count - left) 
            return totalAmountBelowAverage + totalAmountAboveAverage
        }
    }
}
```