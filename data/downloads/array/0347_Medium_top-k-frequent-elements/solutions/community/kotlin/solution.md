# Bucket sort, O(n) with explanation

**Author:** dzmtr
**Votes:** 9
**Link:** [https://leetcode.com/problems/top-k-frequent-elements/solutions/3551703/](https://leetcode.com/problems/top-k-frequent-elements/solutions/3551703/)

---

Knowing that max frequency is nums.size (all elements are the same), we can put elements in array, according to their count.

Example:
[1, 1, 1, 2, 2, 3]

store their count in a Map <Element: Count>:
[{1: 3}, {2: 2}, {3: 1}]

put them in freq Array<Count: List<Element>>:
[[], [3], [2], [1], [], [], []]

Since we need most frequent elements, flat the array and return sublist of k size, starting from the end. 

Time: O(n)
Space: O(n)

```
class Solution {
    fun topKFrequent(nums: IntArray, k: Int): IntArray {
        val map = nums.toList().groupingBy { it }.eachCount() // O(n)

        val freq = Array<MutableList<Int>>(nums.size + 1) { mutableListOf() } // [freq : elements]
        map.forEach { k,v -> freq[v].add(k) }
        
        return freq.flatMap{ it }.takeLast(k).toIntArray()
    }
}
```