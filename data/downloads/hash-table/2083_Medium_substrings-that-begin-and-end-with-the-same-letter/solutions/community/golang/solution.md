# A Very Simple Prefix Sum Solution

**Author:** funkeyfreak
**Votes:** 0
**Link:** [https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5292111/](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5292111/)

---

# Code
```
func numberOfSubstrings(s string) int64 {
    count := [26]int{}
    var res int64

    for _, r := range s {
        count[r - 'a']++
        res += int64(count[r - 'a'])
    }

    return res
}
```