# JavaScript Easy Solution

**Author:** astiksarathe
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-string-length/solutions/3595088/](https://leetcode.com/problems/minimize-string-length/solutions/3595088/)

---

# Intuition
    We need to count unique char in the string

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(m) 
    m = number of unique char, max value is 26
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string} s
 * @return {number}
 */
const minimizedStringLength = (s) => {
    const uniqueChars = new Set([...s]);
    return uniqueChars.size;
};

```