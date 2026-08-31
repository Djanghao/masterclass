# Simple MaxHeap + Map

**Author:** user0122E
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/5532769/](https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/5532769/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
MaxHeap + MutableMap

# Complexity
- Time complexity: $$O(nlogn)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(2n + k)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun rearrangeString(s: String, k: Int): String {
        // Time: O(NlogN), Space: O(N)
        if(s.length == 1 || k == 0 || k == 1) return s
        val maxHeap = PriorityQueue(compareBy<MutableMap.MutableEntry<Char, Int>>{ -it.value }.thenBy { it.key })
        val map = mutableMapOf<Char, Int>()
        s.forEach {
            map[it] = map.getOrDefault(it, 0) + 1
        }
        maxHeap.addAll(map.entries)
        // Space: O(k)
        val prevChars = mutableListOf<MutableMap.MutableEntry<Char, Int>>()
        val sb = StringBuilder()
        while(maxHeap.isNotEmpty() && maxHeap.size >= k) {
            val curChars = buildList {
                repeat(k) {
                    val entry = maxHeap.poll()
                    entry.setValue(entry.value - 1)
                    if(entry.value != 0) add(entry)
                    sb.append(entry.key)
                }
            }
            
            maxHeap.addAll(curChars)
        }

        while(maxHeap.isNotEmpty()) {
            sb.append(maxHeap.poll().key)
        }

        return if(sb.length != s.length) "" else sb.toString()
    }      
}
```