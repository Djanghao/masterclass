# Easy solve! 13 lines of code! 1 for and 1 if/else

**Author:** 4wl2d
**Votes:** 4
**Link:** [https://leetcode.com/problems/optimal-partition-of-string/solutions/3378467/](https://leetcode.com/problems/optimal-partition-of-string/solutions/3378467/)

---

# Intuition
I solved something like this before!

# Approach
I need to use ArrayList, to add char in it and everytime check if we already have this char in array, or not.
if we havent this char - we adding one
if we have this char - res++(new substring), clearing array(because we alredy have this substring and we need to start next one) and adding this symbol(because this is new substring)

# Complexity
- Time complexity:
$$O(n)$$


# Code
```
class Solution {
    fun partitionString(s: String): Int {
        var arr: ArrayList<Char> = arrayListOf()
        var res = 1
        for (i in s) {
            if (i !in arr) {
                arr.add(i)
            }
            else {
                res++
                arr.clear()
                arr.add(i)
            }
        }
        return res
    }
}
```