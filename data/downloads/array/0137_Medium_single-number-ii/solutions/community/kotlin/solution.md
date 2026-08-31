# Quick sort with optimizations. O(n) with constant space

**Author:** mihaillinkov
**Votes:** 2
**Link:** [https://leetcode.com/problems/single-number-ii/solutions/3719183/](https://leetcode.com/problems/single-number-ii/solutions/3719183/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Idea is to use improved quick sort algorithm, similar to [K-ordered statistic](https://en.wikipedia.org/wiki/Order_statistic) search. For partitioning - [Dutch national flag problem](https://en.wikipedia.org/wiki/Dutch_national_flag_problem) algorithm is used, so elements lower than target go to the left part of array, equal - to the middle, and greater - to the right part.
After partitioning: 
- if number of elements in the left part not devisible by 3 -> search in the left part
- if there is only one element in the middle -> return result
- otherwise -> search in the right part

# Complexity
- Time complexity: on average $$O(n)$$. Worst case scenario $$O(n^2)$$, but with randomization on target element's pick in partition function could be improved
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- $$O(1)$$ without recursion stack
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun singleNumber(nums: IntArray): Int {
        
        /* partition array into 3 parts.
            Left part -> elements less than target
            Middle part -> elements equals to target
            Right part -> elements greater than target
         */
        fun partition(l: Int, r: Int): Pair<Int, Int> {
            val target = nums[l]
            var targetLeft = l
            var targetRight = l
            var i = l + 1
            var right = r
            
            while (i <= right) {
                if (nums[i] < target) {
                    nums.swap(i++, targetLeft++)
                    targetRight++
                    continue
                }
                if (nums[i] == target) {
                    targetRight++
                    i++
                    continue
                }
                nums.swap(right--, i)
            }

            return targetLeft to targetRight
        } 

        fun find(l: Int, r: Int): Int {
            val (targetLeft, targetRight) = partition(l, r)
            if (targetRight - targetLeft == 0) return nums[targetLeft]
            if ((targetLeft - l) % 3 != 0) return find(l, targetLeft - 1)
            return find(targetRight + 1, r)
        }   

        return find(0, nums.lastIndex)
    }
}

fun IntArray.swap(i1: Int, i2: Int) {
    val t = this[i1]
    this[i1] = this[i2]
    this[i2] = t
}
```