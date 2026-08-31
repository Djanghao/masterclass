# Kotlin 100% 100%

**Author:** marcosbmariano
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/3418046/](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/3418046/)

---

# Intuition
Sliding window on s + s

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)

# Code
```
class Solution {
    fun minFlips(s: String): Int {
         var evenMap = intArrayOf(0,0)
        var oddMap = intArrayOf(0,0)

        s.forEachIndexed { index, value ->
            val num = value.toInt() - '0'.toInt()
            if( index and 1 == 0){// when index is even
                evenMap[num]++
            }else{
                oddMap[num]++
            }
        }


        var filled  = Math.max(evenMap[0] + oddMap[1], evenMap[1] + oddMap[0])

        var doubleS = s.plus(s)
        var startIndex = 0
        for( i in s.length..doubleS.lastIndex){
            val newNum = doubleS[i].toInt() - '0'.toInt()
            val oldNum = doubleS[startIndex].toInt() - '0'.toInt()

            if( startIndex and 1 == 0){
                evenMap[oldNum]--
            }else{
                oddMap[oldNum]--
            }

            if( i and 1 == 0){
                evenMap[newNum]++
            }else{
                oddMap[newNum]++
            }

            filled  = Math.max(filled, Math.max(evenMap[0] + oddMap[1], evenMap[1] + oddMap[0]))
            startIndex++
        }

        return s.length - filled
    }
}
```