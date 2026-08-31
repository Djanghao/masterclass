# Kotlin, clean code, easy to read, commented

**Author:** easchner
**Votes:** 1
**Link:** [https://leetcode.com/problems/shuffle-an-array/solutions/1349206/](https://leetcode.com/problems/shuffle-an-array/solutions/1349206/)

---

Basically everything before the list pointer is shuffled. Everything after isn't. Even though we end up swapping elements multiple times this way, each element has a `1/n` chance of being selected first, with the losers having a `1/(n-1)` chance of being selected second, etc.. Since you'd have a `1/n` chance of being selected first, you'd have a `1 - 1/n` chance of not being selected first. This gives you a total chance of being selected second as `(1-1/n) * (1/(n-1))` = `1/n`, which is the same for any other spot.

```
// We need to change this from (nums: IntArray) to (val nums: IntArray) so we can reference it outside of init
class Solution(private val nums: IntArray) {
	// We have to create a copy to either store or one to shuffle, so may as well just keep the original
    fun reset(): IntArray {
        return nums
    }

    fun shuffle(): IntArray {
		// Copy the original array (could also `= IntArray(nums.size) { nums[it] }`)
        val shuffled = nums.clone()
        
        for (i in nums.indices) {
			// Pick a new spot after this. The value in that spot will be the next already sorted value
            val newSpot = (i until shuffled.size).random()
            shuffled[i] = shuffled[newSpot].also { shuffled[newSpot] = shuffled[i] } // Swap 'em
        }
        
        return shuffled
    }
}
```