# Go solution from the Editorial

**Author:** ___lovesh1808___
**Votes:** 1
**Link:** [https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/solutions/5052034/](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/solutions/5052034/)

---

# Intuition
[Why fibonacci works?](https://www.youtube.com/watch?v=a9-NtLIs1Kk)


# Complexity
**- Time complexity:**
*O(log2(max_int)=32)

**- Space complexity:**
*O(log2(max_int)=32)*

# Code
```
func findIntegers(n int) int {
    f := make([]int, 32)
    f[0] = 1
    f[1] = 2
    for i := 2; i < 32; i ++ {
        f[i] = f[i - 1] + f[i - 2]
    } 
    i, sum, prev_bit := 30, 0, 0
    for i >= 0 {
        if n & (1 << i) != 0 {
            sum += f[i]
            if prev_bit == 1 {
                sum--
                break
            }
            prev_bit = 1
        } else {
            prev_bit = 0
        }
        i --
    }
    return sum + 1
}
```