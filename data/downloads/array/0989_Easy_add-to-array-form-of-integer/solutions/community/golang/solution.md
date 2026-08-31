# Golang short and simple solution

**Author:** traffiknewmail
**Votes:** 4
**Link:** [https://leetcode.com/problems/add-to-array-form-of-integer/solutions/3187257/](https://leetcode.com/problems/add-to-array-form-of-integer/solutions/3187257/)

---

# Complexity
- Time complexity: O(n)
- Space complexity: O(1) - if we don't count additional elements produced by k. But it's limited to 4 as k <= 10^4


# Code
```
func addToArrayForm(num []int, k int) []int {
    i := 1
    for k > 0 {
        if len(num) >= i {
            k += num[len(num)-i]
            num[len(num)-i] = k % 10
        } else {
            num = append([]int{k % 10}, num...)
        }
        i++
        k = k / 10
    }
    return num
}
```