# [Golang] Time: O(n), Space: O(1)

**Author:** lacfo
**Votes:** 9
**Link:** [https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/890542/](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/890542/)

---

```
func sumOddLengthSubarrays(arr []int) int {
    //instead of calculating all subarray sum
    //we can think about how many times for each num in arr is calculated in the subarray
    //for each nums[i], to left, there are 0, 1, i elements to the left choices, this is (i+1) choices
    //to the right, there are 0, 1, n-1-i-1+1(n-i-1), total (n-i) choices
    //and ((i+1) * (n-i) + 1) / 2 choices are of odd length
    res := 0
    n := len(arr)
    for i, num := range arr {
        cnt := ((i+1)*(n-i) + 1) / 2
        res += num * cnt
    }
    return res
}
```