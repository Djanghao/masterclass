# Golang | O(N) time, O(1) mem | Detail explanation

**Author:** linhduong
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/1868695/](https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/1868695/)

---

Suppose that k < n (number of ints):
- You are never able to touch nums[k-1]
- Because: 
  - Firstly, you have to remove [0..k-2] which is `k - 1` steps.
  - Then you have no choice in last step: must remove nums[k - 1]
- In this way, you only able to touch: 
  - nums[k] (remove first k ints: [0..k-1]) 
  - nums[0..k-2]

For k == n, you are never able to touch nums[n-1], same reason as above. In this case, you only able to touch nums[0..n-2]

For k > n, you can touch all ints.

Lets say `i` is the index of maximum ints that you can touch.

- if `i == 0`:
	- if k is odd, then steps: remove nums[0] -> remove nums[1] -> add nums[0] -> remove nums[0] .. -> add nums[0]
	- if k is even, then steps: remove nums[0] -> add nums[0]
	- So, no matter what, we can have `nums[i]`
- i > 0 now. First you remove 0..i-1 ints, which is `i` steps:
	- Remaining steps is: `remain = k - i`
	- if `remain` is odd, then steps: remove nums[i] -> add nums[i-1] -> add nums[i] -> remove nums[i] -> .. -> add nums[i]
	- `remain` is even, then steps: remove nums[i] -> add nums[i] -> .. -> add nums[i]

So, no matter what, we are able to get max int among all ints that we can touch.

```go
func maximumTop(nums []int, k int) int {
    n := len(nums)
    lastBit := k & 1
    
    if n == 1 {
        if lastBit == 1 { // k is odd
            return -1
        }
        return nums[0]
    }
    
    max := -1
    if k < n {
        max = nums[k]
        k--
    } else if k == n {
        k = n - 1
    } else {
        k = n
    }
    
    for i := 0; i < k; i++ {
        if nums[i] > max {
            max = nums[i]
        }
    }
    
    return max
}
```