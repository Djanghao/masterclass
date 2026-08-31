# [GO] Modulo & switch, efficient

**Author:** chris_shiro
**Votes:** 1
**Link:** [https://leetcode.com/problems/confusing-number/solutions/4249139/](https://leetcode.com/problems/confusing-number/solutions/4249139/)

---

# Complexity
- Time complexity:  O(L)
    - where L = log10(n) is the number of digits of n
    - Need L iterations to break down n
- Space complexity: O(L)
    - L is proportional to the number of bytes needed to store n
    - Store new integer using (log10(n) / log10(2)) / 8 = const * L bytes

# Code
```
func confusingNumber(n int) bool {
    nn := n
    var res int = 0
    for ; nn > 0; {
        m := nn % 10
        switch m {
            case 0,1,8: res = res * 10 + m
            case 6:     res = res * 10 + 9
            case 9:     res = res * 10 + 6
            default:    return false
        }
        nn = nn/10
    }
    return res != n
}
```