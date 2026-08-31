# Kotlin

**Author:** jakobakoba
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-ids/solutions/4921018/](https://leetcode.com/problems/most-frequent-ids/solutions/4921018/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    data class Pair(val id: Int, val count: Long)
    fun mostFrequentIDs(nums: IntArray, freq: IntArray): LongArray {
        val n = nums.size
        val ans = LongArray(n)
        val idFreq = mutableMapOf<Int, Long>()
        val maxHeap = PriorityQueue<Pair>(compareByDescending{it.count})
        for(i in 0 until n){
            idFreq[nums[i]] = idFreq.getOrDefault(nums[i], 0L) + freq[i]
            maxHeap.add(Pair(nums[i], idFreq[nums[i]]!!))

            var cur = maxHeap.peek()
            while(idFreq[cur.id]!! != cur.count){
                maxHeap.remove()
                cur = maxHeap.peek()
            }
            ans[i] = maxHeap.peek().count
        }
        return ans
    }
}
```