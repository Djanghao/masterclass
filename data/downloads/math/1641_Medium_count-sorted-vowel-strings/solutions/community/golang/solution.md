# Simple Solution 0 ms, Go,Maths

**Author:** Anjush_Bhargavan
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-sorted-vowel-strings/solutions/4756686/](https://leetcode.com/problems/count-sorted-vowel-strings/solutions/4756686/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
func countVowelStrings(n int) int {
    d4,d3,d2,d1 := 5,10,10,5
    for i := 1 ; i < n ; i++ {
        d4 += d3 
        d3 += d2
        d2 += d1
        d1++

    }
    return d4
}
```