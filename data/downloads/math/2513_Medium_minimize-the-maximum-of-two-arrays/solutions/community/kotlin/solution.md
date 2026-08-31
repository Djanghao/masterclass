# Binary Search

**Author:** FindBetterJobs
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/solutions/4856400/](https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/solutions/4856400/)

---

# Intuition
Based on the size of the input, it is not efficient to loop through all the possible numbers and actually build two arrays to find the maximum. Good news is the question is not asking us to output arrays, it just need the maximum, thus it is natually to think of binary search to directly 'guess' the maximum. 

# Approach
Use binary search. Say our current guess is mid. If the count of positive numbers that are <= mid and not divisible by divisor1 is less than uniqueCnt1, that means our guess is too small, we need to move right to have more numbers. Same for divisor2 and uniqueCnt2. 
Or the count of all the positive unique numbers that are not divisble by both divisor1 and divisor2 , is <= uniqueCnt1 + uniqueCnt2, this also means we guess too small. 
For the above cases, we move left = mid + 1
If it is not the above cases, this means our guess maybe too big, or just correct, we will move right = mid. 


# Code
```
class Solution {
    fun minimizeSet(divisor1: Int, divisor2: Int, uniqueCnt1: Int, uniqueCnt2: Int): Int {
        var left = 1
        var right = Int.MAX_VALUE
        while (left < right) {
            var mid = left + (right - left) / 2
            if (MidIsNotBigEnough(divisor1.toLong(), divisor2.toLong(), uniqueCnt1.toLong(), uniqueCnt2.toLong(), mid.toLong())) {
                left = mid + 1
            } else {
                right = mid
            }
        }

        return right
    }

    fun MidIsNotBigEnough(divisor1: Long, divisor2: Long, uniqueCnt1: Long, uniqueCnt2: Long, n:Long) : Boolean {
        val a = n - n / divisor1 
        val b = n - n / divisor2 
        // c is something can not be divisable by d1 and d2
        // which is n - (divisilbe by divisor1 or by divisor2)
        // which is n - (divisible by divisor1 + divisible by divisor2 - divisble by divisor1 & divisor2)
        val c =  n - (n / divisor1 + n/divisor2 - n / findLCM(divisor1, divisor2))
        if (a < uniqueCnt1) return true
        if (b < uniqueCnt2) return true
        if (a + b - c < uniqueCnt1 + uniqueCnt2) return true
        return false
    }

    private fun findLCM(a: Long, b: Long): Long {
        val biggerNum = if(a > b) a else b
        var lcm = biggerNum
        while(true) {
        // Break loop we get number divisible by a and b both.
            if(((lcm % a) == 0L) && ((lcm % b) == 0L)) {
                break
            }
 
            lcm  += biggerNum
        }
        return lcm
    }

}
```