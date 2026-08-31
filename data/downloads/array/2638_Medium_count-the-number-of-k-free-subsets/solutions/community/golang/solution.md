# Go (golang) sort, count, & memo'd fibonacci = 100% / 100%

**Author:** bunnycode
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/3873923/](https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/3873923/)

---

# Code
```
func countTheNumOfKFreeSubsets(nums []int, k int) int64 {
    sort.Ints(nums)
    cnt := map[int]int{}
    for _, n := range nums {
        cnt[n] = cnt[n-k] + 1
        delete(cnt, n-k)
    }
    
    res := int64(1)
    for _, v := range cnt {
        res *= int64(fib(v+1))
    }
    return res
}

var fibMem = []int{ 1, 2, 3, 5, 8 }
func fib(n int) int {
    for n > len(fibMem) {
        i := len(fibMem)-1
        fibMem = append(fibMem, fibMem[i]+fibMem[i-1])
    }
    return fibMem[n-1]
}

```