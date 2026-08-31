# ✅ 82.31% Beat runtime with easy tip.

**Author:** nd-thinh194
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-the-difference/solutions/4086671/](https://leetcode.com/problems/find-the-difference/solutions/4086671/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Because only 1 character is difference in string t, so I use the sum of ASCII of two string and the result of operator sumT - sumS is the ASCII code of the result. 

# Approach
<!-- Describe your approach to solving the problem. -->
- Loop through string S and calculate sum of each element ASCII.
- Loop through string T and calculate sum of each element ASCII.
- Return the result of sumT - sumS

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func findTheDifference(s string, t string) byte {
    sumS, sumT := 0, 0
    for _, i := range s {
        sumS += int(i)
    }

    for _, i := range t {
        sumT += int(i)
    }

    diff := sumT - sumS

    return byte(diff)
}
```