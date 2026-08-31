# Easy Kotlin || O(N) || proper Approach

**Author:** choudharyshiv
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/5373987/](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/5373987/)

---

# Approach
- if only one swap is allowed it means only 2 char will be misplaced
- if misPlaced char count is not equal to 2 return false
- if it is 2 then swap them and check id strings are equal or not

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)
# Code
```
class Solution {
        fun areAlmostEqual(s1: String, s2: String): Boolean {
        var count = 0
        var idx1 = -1
        var idx2 = -1
        if(s1 == s2)
            return true
        for(i in 0 until s1.length) {
            if(s1[i] != s2[i]){
                count ++
                if(count == 1)
                idx1 = i
                if(count == 2)
                idx2 = i
                if(count == 3)
                return false
            }
        }
        if(count != 2)
        return false
        
        var builder  = StringBuilder()
        builder.append(s1)
        var temp = builder[idx1]
        builder[idx1] = builder[idx2]
        builder[idx2] = temp
        if(builder.toString() == s2)
            return true
        return false
    }
}
```