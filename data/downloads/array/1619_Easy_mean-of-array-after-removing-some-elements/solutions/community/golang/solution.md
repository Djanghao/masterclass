# Golang O(n log(n) + (len(arr) * 0.90)), O(1) solution with explanation

**Author:** nathannaveen
**Votes:** 2
**Link:** [https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/1296446/](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/1296446/)

---

The time complexity for this solution is `O(n log(n) + (len(arr) * 0.90))`. I am going to expand this for it to be a little easyer to understand: `O(n log(n) + (len(arr) - (len(arr) * 0.10)))`, and now we are going to work with this. We can brake this up into two parts:

* `n log(n)`: This is for the sort (Worst case sinario is `O(n log n)`, best case is `O(log n)`)
* `len(arr) - (len(arr) * 0.10)`: The first `len(arr)` is the total, then we subtract `len(arr) * 0.10`. `len(arr) * 0.10` is for the first and last `5%`, and `2 * 5% = 2 * 0.05 = 0.10`, so when we subtract `len(arr) * 0.10` from `len(arr)` we get the proper `len(arr) * 0.90`.

The idea of this solution is we sort `arr` and then sum up middle 90% elements.

``` go
func trimMean(arr []int) float64 {
    sort.Ints(arr)
    sum := 0
    
    for i := len(arr) / 20; i < len(arr) - (len(arr) / 20); i++ {
        sum += arr[i]
    }
    return float64(sum) / float64(len(arr) - (len(arr) / 20) * 2)
}
```