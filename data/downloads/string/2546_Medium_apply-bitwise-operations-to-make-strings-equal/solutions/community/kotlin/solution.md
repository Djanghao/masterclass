# Very simple

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/4345370/](https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/4345370/)

---

# Intuition
After analyzing possible and impossible situations, it became clear that only 2 options are excluded - when the source or destination strings consist of only '0'. It is impossible to do anything else from just zeros, and it is impossible to come to just zeros from any other configuration.

# Approach
After analyzing possible and impossible situations, it became clear that only 2 options are excluded - when the source or destination strings consist of only '0'. It is impossible to do anything else from just zeros, and it is impossible to come to just zeros from any other configuration.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun makeStringsEqual(s: String, target: String): Boolean {
        if (s==target) return true
        val ind =(('1' !in s ) || ('1' !in target ))
        // val not_ind =(('1' in s ) && ('1' in target )) // reciprocal value
        // return not_ind
        return !ind
    }
}
```