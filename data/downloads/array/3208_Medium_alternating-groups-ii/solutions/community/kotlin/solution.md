# Sliding Window O(N) Kotlin

**Author:** light674
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-groups-ii/solutions/5436353/](https://leetcode.com/problems/alternating-groups-ii/solutions/5436353/)

---

# Intuition
Circular problems generally required modulus operator to wrap around the indexes and this problem seems like a sliding window problem.

# Approach
1. Go through the 1st group and store the score of that array, which means how many alternating numbers are present in this group. 
2. Now for each group after the 1st one, you need to remove the contribution of 2nd element of last group and add the contribution of last 2nd element of the current group to the current group's score.
3. Whichever group has score = k-2 will increase the result by 1. 

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
class Solution {
    fun numberOfAlternatingGroups(c: IntArray, k: Int): Int {
        val n = c.size
        var score = 0
        var res = 0

        fun check(i:Int): Boolean = c[i%n] != c[(i-1)%n] && c[i%n] != c[(i+1)%n]

        for(i in 1 until k-1){
            if(check(i))score++
        }
        if(score == k-2)res++

        for(i in 1 until n){
            if(check(i))score--
            if(check(i+k-2))score++

            if(score == k-2)res++
        }

        return res
    }
}
```