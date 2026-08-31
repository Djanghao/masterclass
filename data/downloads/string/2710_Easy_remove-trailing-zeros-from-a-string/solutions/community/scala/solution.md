# Scala: using lastIndexWhere at 83.33 % time complexity

**Author:** mpractice
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/5832752/](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/5832752/)

---

# Intuition
We need to return the part of the string up to the last non-zero character.


# Approach
We iterate through the string to find the last position where the character is not \u20180\u2019.  Whenever possible, we should use existing functions because they leverage optimized internal implementations, which can be more efficient than writing loops ourselves.

# Complexity
- Time complexity:
O(n) - We traverse the string once.

- Space complexity:
O(1) - We use only one extra variable to store the position of the last non-zero character. Note that we don\u2019t have control over the internal workings of the lastIndexWhere and slice functions.

# Code
```scala []
object Solution {
    def removeTrailingZeros(num: String): String = {
        val lastNon0Index = num.lastIndexWhere(_ != '0')
        if (lastNon0Index == -1)
        {
            return num
        }
        return num.slice(0, lastNon0Index + 1)
    }
}
```