# Kotlin | IntArray Lookup Table

**Author:** jschnall
**Votes:** 0
**Link:** [https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/5870447/](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/5870447/)

---

# Intuition
I think the tricky bit is understanding how the remainder can be used to retrieve and store the entire range of divisible numbers (% in JVM languages isn't a true modulus, but it is effectively the same here, since we only deal with positive numbers). Once you realize you can store the remainders of the numbers for a set of divisible numbers, just as you would store numbers directly to lookup differences, it's just like two sum.

# Approach
Create of each number divided by 60. Save the count of each mod to a lookup table. Do 2 sum with the remainders. Since there are only 60 possible values, rather than a much larger, potentially sparse range, we can use an IntArray rather than a map to store counts.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```kotlin []
class Solution {
    fun numPairsDivisibleBy60(time: IntArray): Int {
        val mods = time.map { it % 60 }
        val modToCount = IntArray(60)
        for (mod in mods) {
            modToCount[mod]++
        }
        
        var result = 0L
        for (mod in mods) {
            val target = (60 - mod) % 60 // Handle edge case: 60 - 0 == 60
            val count = modToCount[target] ?: 0 
            if (mod == target && count > 1) {
                result += count - 1
            } else if (mod != target) {
                result += count
            }
        }
        return (result / 2).toInt()
    }
}
```