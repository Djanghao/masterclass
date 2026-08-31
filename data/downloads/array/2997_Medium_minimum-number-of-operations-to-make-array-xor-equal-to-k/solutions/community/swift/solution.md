# Swift 1liner

**Author:** OrchidHunter
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/5085593/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/5085593/)

---

**One-Liner, terse (accepted answer)**
```
class Solution {
    func minOperations(_ nums: [Int], _ k: Int) -> Int {
        nums.reduce(k,^).nonzeroBitCount
    }
}
```

**Intuition**
**1) First un-obfuscate the problem statement as:**
Given an array `nums`, XOR all elements together as `numsXor: Int`. Now, how many bits would you need to flip in `numsXOR` to equal `k`?
**2) Count the bits that need to flip.**
An insight here is that XOR-ing `numsXOR` with `k` would make all the different bits 1 and same bits zero. So we XOR them together and simply call `.nonzeroBitCount` to count the set bits. 

If the interviewer says that we cannot use `.nonzeroBitCount`, we could count the set bits with a loop (constraint is `0 <= k <=1_000_000`, so 20-bits is sufficient). 
```
// long-hand form
func minOperations(_ nums: [Int], _ k: Int) -> Int {
	let numsXOR: Int = nums.reduce(0,^)
	let numsXOR_xor_k = numsXOR ^ k
	return (0..<20).reduce(0) {ans, b in ans + (numsXOR_xor_k & (1<<b) != 0 ? 1:0)}
}
```
 
