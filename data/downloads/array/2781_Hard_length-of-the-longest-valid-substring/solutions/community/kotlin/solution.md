# Understandable solution (beats 100% runtime, 100% memory)

**Author:** yapoxe
**Votes:** 1
**Link:** [https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/4632343/](https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/4632343/)

---

![image.png](./images/0.png)

# Intuition
We need to iterate over the string, setting the lower limit up to which the forbidden string is contained, and looking for the maximum difference between the upper and lower limits.

If we have successfully passed 10 characters, then there will be no point in checking further to the lower limit, so first of all we add a check for distance, and then for the inclusion of a substring in forbidden substrings.

# Code
```
class Solution {
    fun longestValidSubstring(word: String, forbidden: List<String>): Int {
        var maxLength = 0
        var lowerLimit = 0
        val forbiddenSet = HashSet<String>(forbidden)
        for (upperLimit in 1..word.length) {
            for (pointer in upperLimit - 1 downTo lowerLimit) {
                if (upperLimit - pointer > 10) {
                    break
                } else if (word.substring(pointer, upperLimit) in forbiddenSet) {
                    lowerLimit = pointer + 1
                    break
                }
            }
            maxLength = maxOf(maxLength, upperLimit - lowerLimit)
        }
        return maxLength
    }
}
```