# Kotlin - Monotonic Stack

**Author:** idiotleon
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/952797/](https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/952797/)

---

Solution - [github](https://github.com/An7One/leetcode-solutions-kotlin-an7one/tree/main/src/main/kotlin/com/an7one/leetcode/lvl3/lc1673)

<b>Problem List</b>
#MonoStack - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_data_structure/stack/stack_monotonic.txt)
#MonoDeque - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_data_structure/queue/queue_monotonic.txt)

```
class Solution {
    fun mostCompetitive(nums: IntArray, k: Int): IntArray {
        val nNums= nums.size
		// number of esasure at most
        val limit = nNums - k

        val stack = ArrayDeque<Int>()
		// the acutal instances of esaure
        var count = 0

        for(num in nums){
            while(stack.isNotEmpty() && count < limit && stack.last() > num){
                stack.removeLast()
                ++count
            }
            
            stack.addLast(num)
        }
        
		// to pop them out, if there are more than k elements in the stack now
        while(stack.size > k) {
			stack.removeLast()
		}
        
		// to construct the answer array
        return stack.toIntArray()
	}
}
```

This approach barely passes.
```
class Solution {
    fun mostCompetitive(nums: IntArray, k: Int): IntArray {
        val nNums = nums.size
        val limit = nNums - k

        val stack = ArrayDeque<Int>()
        var count = 0

        for (num in nums) {
            while (stack.isNotEmpty() && count < limit && stack.last > num) {
                stack.removeLast()
                ++count
            }

            stack.addLast(num)
        }

        while (stack.size > k) {
            stack.removeLast()
        }

		// to construct the answer array
        return stack.toIntArray()
    }
}
```

This approach gets TLEed.
```
class Solution {
    fun mostCompetitive(nums: IntArray, k: Int): IntArray {
        val nNums = nums.size
        val limit = nNums - k

        val stack = ArrayDeque<Int>()
        var count = 0

        for (num in nums) {
            while (stack.isNotEmpty() && count < limit && stack.last() > num) {
                stack.removeLast()
                ++count
            }

            stack.addLast(num)
        }

        while (stack.size > k) {
            stack.removeLast()
        }

        return stack.toIntArray()
    }
}
```