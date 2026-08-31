# Go | Brute Force

**Author:** b3k3r
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4688644/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4688644/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Iterate through all substrings of k size starting at k and try to find the longest min index where the suffix matches the prefix. Once you find a suffix that fully matches the prefix, return the 'k value' you started from.

abcdabc, k = 3
start from 3
abc | dab | c, here none of the suffixes match the prefix so return 3

abcdabcdabcdab k = 4
abcd | abcd | abcd | ab, here, the suffix starting at the 'first' k value matches all the way down, so return 1

abacab, k = 2
ab | ac | ab, here the suffix starting at the second k value matches (2*k), so return 2


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O((len(word)/k) * n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
func minimumTimeToInitialState(word string, k int) int {            
    var ks int    
    var match bool
    for ks = 1; !match && ks * k < len(word);  {
        match = true
        for i, j := 0, ks*k; j < len(word); i, j = i+1, j+1 {
            if word[i] != word[j] {
                match = false
                ks++
                break
            }
        }
    }
    return ks
}
```