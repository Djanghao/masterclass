# Bit Manipulation || DP || O(N)

**Author:** anonymous_now
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-game-ii/solutions/5914971/](https://leetcode.com/problems/flip-game-ii/solutions/5914971/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun isIthBitZero(num: Long, i: Int): Boolean {
        return (num and (1L shl i)) == 0L
    }
    val hm = hashMapOf<Pair<Long,Boolean>, Boolean>()
    fun f(num:Long, n:Int, turn:Boolean):Boolean {
        // check if 2 consecutive bit is 0
        var flag = false
        if(hm.contains(Pair(num,turn))) {
            return (hm[Pair(num,turn)]?:false)
        }
        for(i in 0..n-1) {
            // check ith and (i+1)th bit 0 change them
            if(isIthBitZero(num,i) && isIthBitZero(num,i+1)){
                var newNum = num 
                newNum = newNum or (2.0.pow(i)).toLong()
                newNum = newNum or (2.0.pow((i+1))).toLong()
                 // check if changing these bits loose the other player
                if(f(newNum, n, !turn) == false) {
                    // if other player loose by changing these bits then ans is true
                    flag = true
                }
            }
        }
        hm[Pair(num,turn)]= flag
        return (hm[Pair(num,turn)]?:false)
    }
    fun canWin(cs: String): Boolean {
        var num = 0L
        val n = cs.length-1
        // genrate num with cs -> for + change to 0 for - change to 1
        for(i in 0..cs.length-1) {
            if(cs[i] == '-') {
                num = num or (2.0.pow(n-i)).toLong()
            } 
        }
        val ans = f(num, n,true)
        return ans
    }
}
// ++, +++, ++++  ==> YES
// +++++ ==> NO
// ++++++ ==> YES 
// +++++++ ==> YES 
// ++++----
// total N state ==> 
// N-2 , n-4, n-6 .... 1
// N^2
// state mark 
// calculate
// state revert
```