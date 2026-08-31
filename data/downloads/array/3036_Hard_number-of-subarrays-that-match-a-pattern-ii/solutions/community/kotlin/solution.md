# Template + Rabin-Karp + sliding window

**Author:** sav20011962
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4722649/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4722649/)

---

# Intuition
Let's virtually transform the "NUMS" array according to the principle of the template from the condition. Next, using the Rabin-Karp method, we pack \u201Cpattern\u201D and a \u201Csliding window\u201D of length \u201Cpattern\u201D from the \u201CNUMS\u201D array and compare them with each other.
# Approach
Let's virtually transform the "NUMS" array according to the principle of the template from the condition. Next, using the Rabin-Karp method, we pack \u201Cpattern\u201D and a \u201Csliding window\u201D of length \u201Cpattern\u201D from the \u201CNUMS\u201D array and compare them with each other.
# Complexity
- Time complexity:
O(n+m)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun countMatchingSubarrays(nums: IntArray, pattern: IntArray): Int {
        val prime = 5
        var hash_patt = 0
        var tek_hash = 0
        val len = nums.size
        val len_p = pattern.size
        var mult = 1
        var rez = 0
        for (i in 0 until len_p) {
            hash_patt = hash_patt*prime + (pattern[i] + 2)
            val el_tek = if (nums[i+1]>nums[i]) 1+2 
                    else if (nums[i+1]==nums[i]) 0+2
                    else -1+2
            tek_hash = tek_hash*prime + el_tek
            mult *= prime
        }
        if (tek_hash==hash_patt) rez++
        // println("hash_patt=$hash_patt,tek_hash=$tek_hash,mult=$mult")
        for (i in 1 until len-len_p) {
            val el_prev = if (nums[i]>nums[i-1]) 1+2 
                    else if (nums[i]==nums[i-1]) 0+2
                    else -1+2
            val el_tek = if (nums[i+len_p]>nums[i+len_p-1]) 1+2 
                    else if (nums[i+len_p]==nums[i+len_p-1]) 0+2
                    else -1+2
            tek_hash = tek_hash *prime - el_prev*mult + el_tek
            if (tek_hash==hash_patt) rez++
            // println("+hash_patt=$hash_patt,tek_hash=$tek_hash")
        }
        return rez
    }
}
```