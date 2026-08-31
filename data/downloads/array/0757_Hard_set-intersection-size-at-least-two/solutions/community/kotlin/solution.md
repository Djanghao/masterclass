# Kotlin Solution

**Author:** user7927FP
**Votes:** 0
**Link:** [https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/4262564/](https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/4262564/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Let me clarify with the provided example.
Given the array [[1,3],[8,9], [3,7]], I initially sorted this array to obtain [[1,3],[3,7],[8,9]].
Then, I selected the last array and added two elements to a set: firstLeft and firstLeft+1, resulting in a set {8,9}.
Subsequently, I began iterating through the array with the current array being [3,7].
For each element in the set, I checked whether it fell within the range of the current array. If it did, it meant that we didn't need to include an element to increase the count by 1.
When we did need to add an element to the set, we picked the left element and started the range from the left, adding the appropriate element to the set.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun intersectionSizeTwo(intervals: Array<IntArray>): Int {
            intervals.sortBy{ it[0]}
            val set = mutableSetOf<Int>()
            val firstArr = intervals[intervals.size -1]
            set.add(firstArr[0])
            set.add(firstArr[0]+1)
            for(i in intervals.size-2 downTo 0 ){
                val currentArr = intervals[i]
                var left = currentArr[0]
                var right = currentArr[1]
                var count = 0
                for(s in set){
                    if(s >= left && s <= right) count++
                    if(count == 2) break
                }
                while(count < 2){
                    if(set.contains(left)){
                        left++
                        continue
                    }
                    set.add(left)
                    left++
                    count++
                }
            }
            return set.size
    }
}
```