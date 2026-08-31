# Kotlin O(N) Simple Implementation

**Author:** kumar-27
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/3869442/](https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/3869442/)

---

Credit > https://www.youtube.com/watch?v=lmDfqaqxpwU (https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/3867921/video-explanation-optimizing-the-brute-force-solution-n-3-n-2-n/)

O(N) solution implemented in Kotlin

# Code
```
class Solution {

    fun minimumSeconds(nums: List<Int>): Int {
        val n = nums.size
        val nLoc = mutableMapOf<Int, MutableList<Int>>()

        /* Save locations of each element. */
        for (i in nums.indices){
            nLoc.computeIfAbsent(nums[i],{mutableListOf<Int>()}).add (i)
        }

        var minMax = Int.MAX_VALUE

        for ( (num, locs) in nLoc ) {
            val max = if (n == locs.size) {
                0
            }else if (locs.size == 1) {
                n/2
            } else {
                var tempMax = -1

                /* Use the saved locations to determine the max # of seconds */                
                for (i in locs.indices){
                     val distance = if (i==0){
                         n - locs[locs.lastIndex] + locs[i] - 1
                     }else {
                         locs[i] - locs[i-1] - 1
                     }
                     tempMax = Math.max(tempMax, distance)
                }
                if(tempMax%2==0)tempMax/2 else tempMax/2+1
            }

            minMax = Math.min(minMax, max)
            if (minMax <= 1) break
        } 

        return minMax
    }
}
```