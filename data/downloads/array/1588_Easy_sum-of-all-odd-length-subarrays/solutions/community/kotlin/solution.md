# Kotlin solution

**Author:** BotirMuzaffariy
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/2675420/](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/2675420/)

---


    fun sumOddLengthSubarrays(arr: IntArray): Int {
        var oddSum = 0
        
        for (i in 1..arr.size step 2) {
            oddSum += arr.toList().windowed(i).map { it.sum() }.sum()
        }
        
        return oddSum
    }
