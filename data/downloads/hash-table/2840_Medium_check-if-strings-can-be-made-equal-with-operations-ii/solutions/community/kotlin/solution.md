# Kotlin solution, compare even and odd elements (bad complexity)

**Author:** jakobakoba
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/4017506/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/4017506/)

---

# Intuition
if odd and even elements are the same, we can make s1 to s2.

# Approach

make a fuction that returns even and odd elements of a string
then compare s1 with s2
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun checkStrings(s1: String, s2: String): Boolean {

        fun check(s: String): List<Char>{
            val even = mutableListOf<Char>()
            val odd = mutableListOf<Char>()

            for (i in s.indices){
                if (i % 2 == 0){
                    even.add(s[i])
                } else {
                    odd.add(s[i])
                }
            }
            even.sort()
            odd.sort()
            return even + odd
        }

        return check(s1) == check(s2)
        

    }
}

```