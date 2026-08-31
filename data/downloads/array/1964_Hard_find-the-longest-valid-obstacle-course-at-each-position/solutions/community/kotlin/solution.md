# Kotlin | LIS | O(nlogn) | Explained + Commented

**Author:** lemmingby
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3494664/](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3494664/)

---

# Intuition
This problem rephrases to the following: for each element of the array, find the longest non-decreasing subsequence of the array that ends with this element.

# Approach
There is a well-explained algorithm for finding Longest Increasing Subsequence (see [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)) so we just have to modify it a bit so it works for Longest Non-Decreasing Subsequence. This is further explained in the comments below.

# Complexity
- Time complexity: $$O(nlogn)$$ - we iterate through all elements of the array and do the binary search on the whole array (worst case) on each iterations

- Space complexity: $$O(logn)$$ for the binary search recursive stack (this is possible to avoid with the iterative BS)


# Code
```
class Solution {
    /*
        Returns the index of the first element in the list that is larger 
        than target assuming that such element is always present in the list
        and the list is sorted in non-decreasing order
     */
    fun bsHelper(list: List<Int>, target: Int, l: Int, r: Int): Int {
        if (l == r) {
            return l
        }

        val m = (l + r) / 2

        return if (list[m] <= target) bsHelper(list, target, m + 1, r) else bsHelper(list, target, l, m)
    }

    fun longestObstacleCourseAtEachPosition(obstacles: IntArray): IntArray {
        val result = IntArray(obstacles.size){1}
        val lnds = mutableListOf(obstacles[0])

        //We are going to build the longest non-decreasing subsequence
        //using the slightly modified algo from the corresponding problem
        //300. Longest Increasing Subsequence
        for (i in 1 until obstacles.size) {
            /*
                If the i-th obstacle is the same or taller than the last one in lnds,
                just append it to the lnds and the size of the lnds will be the answer for i.
             */
            if (obstacles[i] >= lnds.last()) {
                lnds.add(obstacles[i])
                result[i] = lnds.size
            /*
                Otherwise we are going to look for idx - the index of the first
                element that is larger than obstacle[i] (there definitely is one) 
                and replace this element with obstacle[i]

                The subarray of ldns starting at 0 and ending at idx is now the 
                longest obstacle course ending at i so its length (idx + 1) is 
                the answer for i
             */ 
            } else {
                val idx = bsHelper(lnds, obstacles[i], 0, lnds.size - 1)
                lnds[idx] = obstacles[i]
                result[i] = idx + 1
            }
        }

        return result        
    }
}
```