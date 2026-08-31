# Golang | Greedy

**Author:** pikachuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/3102791/](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/3102791/)

---

# Code
```
func min_step(original string, num []byte) int {
    var ans int = 0
    var n int = len(original)
    for i := 0; i < n; i++ {
        j := i
        for num[j] != original[i] {j++}
        for i < j {
            num[j], num[j - 1] = num[j - 1], num[j]
            j--
            ans++
        }
    }
    return ans
}
func getMinSwaps(original string, k int) int {
    num := []byte(original)
    fmt.Println(num)
    var i, j int
    var n int = len(num)
    for ;k > 0; k-- {
        for i = n - 2; i >= 0; i-- {
            if num[i] < num[i + 1] {break}
        }
        for j = n - 1; j > i; j-- {
            if num[j] > num[i] {break}
        }
        num[i], num[j] = num[j], num[i]
        for p, q := i + 1, n - 1; p < q; p, q = p + 1, q - 1 {
            num[p], num[q] = num[q], num[p]
        }
    }
    return min_step(original, num)
}
```