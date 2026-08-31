# Go beats 100%

**Author:** Sardar-Khan
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-string-length/solutions/3978609/](https://leetcode.com/problems/minimize-string-length/solutions/3978609/)

---

# Intuition
f the input string contains only lowercase English letters, you can use an array of size 26 to count the frequency of each letter in the string

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
func minimizedStringLength(s string) int {
    freq := [26]int{}

    for _, c := range s {
        freq[c-'a']++
    }

    count := 0
    for _, f := range freq {
        if f > 0 {
            count++
        }
    }

    return count
}
```