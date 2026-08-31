# Go simple

**Author:** tuanbieber
**Votes:** 4
**Link:** [https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/2481607/](https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/2481607/)

---

```
func decompressRLElist(nums []int) []int {
    var res []int
    
    for i := 0; i < len(nums); i += 2 {
        for count := 0; count < nums[i]; count++ {
            res = append(res, nums[i+1])
        }
    }
    
    return res
}

// Runtime: 0 ms, faster than 100.00% of Go online submissions for Decompress Run-Length Encoded List.
// Memory Usage: 6.4 MB, less than 28.74% of Go online submissions for Decompress Run-Length Encoded List.
```