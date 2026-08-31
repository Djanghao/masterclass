# Swift | 7 ms | Fast DFS with Unwinding

**Author:** OrchidHunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/1496342/](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/1496342/)

---

Optimization to reject where value doesn't fit (called out in comment) speeds up test suite execution time greatly.

Time (worst): *O(n log n + 2n  k)*
Space: *O(k)*

```
func canPartitionKSubsets(_ nums: [Int], _ k: Int) -> Bool {
  let sum = nums.reduce(0, +)
  guard sum % k == 0 else { return false }
  let nums = nums.sorted(by: >)
  let target = sum / k
  var buckets = Array(repeating: target, count: k)  
    
  func bucketNextValue(index: Int) -> Bool {
    guard index < nums.count else { return true } 
    let val = nums[index]
    for b in 0 ..< k {
      if buckets[b] >= val {
        buckets[b] -= val
        if bucketNextValue(index: index + 1) {
          return true
        }
        buckets[b] += val
      }
      if buckets[b] == target { // value didn't fit, exit
        return false
      }
    }
    return false
  }

  return bucketNextValue(index: 0)
}
```