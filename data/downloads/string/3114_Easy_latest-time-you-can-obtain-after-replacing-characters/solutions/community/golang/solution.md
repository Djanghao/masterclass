# Go - BEATS ~100% - Easy Find and Replace

**Author:** pektezol
**Votes:** 1
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5022656/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5022656/)

---

# Approach
Check every index if there is a '?'. Depending on the index, replace for the latest time.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
func findLatestTime(s string) string {
    out := []byte(s)
    for i := 0; i < len(out); i++ {
        if out[i] == '?' {
            switch i {
            case 0:
                if out[1] == '0' || out[1] == '1' || out[1] == '?' {
                    out[i] = '1'
                } else {
                    out[i] = '0'
                }
            case 1:
                if out[0] == '1' {
                    out[1] = '1'
                } else {
                    out[1] = '9'
                }
            case 3:
                out[i] = '5'
            case 4:
                out[i] = '9'
            }
        }
    }
    return string(out)
}
```