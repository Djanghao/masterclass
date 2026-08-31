# 100% Go using an array indicating what elements should be bolded

**Author:** ollieelmgren
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-bold-tag-in-string/solutions/5976136/](https://leetcode.com/problems/add-bold-tag-in-string/solutions/5976136/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func addBoldTag(s string, words []string) string {
    // Initialize an array of ints where 1 indicates bold text
    isBoldArr := make([]int, len(s))

    // Mark the indices as bold based on the words found in the string
    for _, word := range words {
        idx := strings.Index(s, word)
        for idx != -1 {
            // Mark the indices corresponding to the found word as bold
            for i := idx; i < idx+len(word); i++ {
                isBoldArr[i] = 1
            }
            // Move to the next occurrence of the word
            newStringToCheck := s[idx+1:]
            idx = strings.Index(newStringToCheck, word)
            if idx != -1 {
                idx += len(s) - len(newStringToCheck)
            }
        }
    }

    // Build the resulting string with bold tags
    ans := ""
    if isBoldArr[0] == 1 {
        ans += "<b>"
    }

    // Iterate through the isBoldArr to construct the final output
    for i := 0; i < len(isBoldArr); i++ {
        // Open <b> tag if transitioning from not bold to bold
        if i > 0 && isBoldArr[i-1] == 0 && isBoldArr[i] == 1 {
            ans += "<b>"
        }
        // Close </b> tag if transitioning from bold to not bold
        if i > 0 && isBoldArr[i-1] == 1 && isBoldArr[i] == 0 {
            ans += "</b>"
        }
        ans += string(s[i])
    }

    // Close the last <b> tag if necessary
    if isBoldArr[len(isBoldArr)-1] == 1 {
        ans += "</b>"
    }

    return ans
}

```