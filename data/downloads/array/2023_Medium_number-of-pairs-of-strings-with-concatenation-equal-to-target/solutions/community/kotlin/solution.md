# Kotlin : brute force solution

**Author:** arwaniahmad659
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/5756171/](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/5756171/)

---

# Code
```kotlin []
class Solution {
        
    fun numOfPairs(nums: Array<String>, target: String): Int {
        var count = 0
        for (i in nums.indices){
            for (j in (i+1)..<nums.size){
                if (str(nums.getOrElse(i){""}, nums.getOrElse(j){""}, true) == target) count++
                if (str(nums.getOrElse(i){""}, nums.getOrElse(j){""}, false) == target) count++
            }
        }
        return count
    }

        
    fun str(s1: String, s2: String, i: Boolean): String{
        val str = StringBuilder()
        return if (i) str.append(s1, s2).toString() else str.append(s2,s1).toString()
    }

}
```