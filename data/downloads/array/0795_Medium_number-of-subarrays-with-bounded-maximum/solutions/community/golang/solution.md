# Golang 0ms solution, easy to understand

**Author:** JieBai
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/946420/](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/946420/)

---

```
func numSubarrayBoundedMax(A []int, L int, R int) int {
    if len(A) == 0 {
        return 0
    }
    //atMost(R) - atMost(L-1) = number of substrings between L and R
    return atMost(A, R) - atMost(A, L - 1)
}

//atMost function returns the number of substrings with max value <= n
func atMost(A []int, n int) int {
    pre := 0
    res := 0
    for i := 0; i < len(A); i++ {
        if A[i] <= n {
            pre++
        } else {
            pre = 0
        }
        res += pre
    }
    return res
}
```