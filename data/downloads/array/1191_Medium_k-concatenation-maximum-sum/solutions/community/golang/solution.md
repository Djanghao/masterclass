# Kadane Algorithm (Golang)

**Author:** Mkkumawat3333
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/3123291/](https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/3123291/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func kConcatenationMaxSum(arr []int, k int) int {
    var mod int = 1e9 + 7
    var n int = len(arr)

    if k == 1 {
        return MaxSubArr(arr, n, 1) % mod
    }

    sum := Sum(arr, n)

    if sum <= 0 {
        return MaxSubArr(arr, n, 2) % mod
    }

    ans := MaxSubArr(arr, n, 2)

    return (ans + (k - 2) * sum) % mod
}

func max(a, b int) int {
    if a > b { return a }
    return b
}

func MaxSubArr(arr []int, n int, k int) int {
    sum := 0
    ans := 0

    for i := 0; i < n * k; i++ {
        sum = max(sum + arr[i % n], 0)
        ans = max(sum, ans)
    }

    return ans
}

func Sum(arr []int, n int) int {
    sum := 0

    for i := 0; i < n; i++ {
        sum += arr[i]
    }

    return sum
}
```