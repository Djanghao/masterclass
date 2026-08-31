# Kotlin: 3 approaches, detailed comments inline

**Author:** karum006
**Votes:** 2
**Link:** [https://leetcode.com/problems/subsets-ii/solutions/3270432/](https://leetcode.com/problems/subsets-ii/solutions/3270432/)

---

# Code
```
class Solution {
    // Approach 1: Use bitmasking to iterate through all possible combinations of 0 to 2^n - 1
    // For each combination, check what all indices are enabled (1s in binary format) and
    // add them to the list. Make sure to sort the list first to avoid adding duplicates.
    // T = O(n * 2^n)
    fun subsetsWithDup1(nums: IntArray): List<List<Int>> {
        nums.sort()
        val resultsSet = hashSetOf<List<Int>>()
        for (i in 0 until (1 shl nums.size)) {
            val list = mutableListOf<Int>()
            for (j in nums.indices) {
                if (i and (1 shl j) > 0) {
                    list.add(nums[j])
                }
            }
            resultsSet.add(list.toList())
        }
        return resultsSet.toList()
    }

    // Approach 2: Use backtracking (recursive DFS) to generate all possible combinations. When
    // adding to the final results, check if it exists, add otherwise. Note that this approach
    // generates all combinations even though they get eliminated eventually (no pruning).
    // T = O(n * 2^n)
    fun subsetsWithDup2(nums: IntArray): List<List<Int>> {
        nums.sort()
        val resultsSet = hashSetOf<List<Int>>()

        fun subSetsRecur(currentList: MutableList<Int>, startIndex: Int) {
            resultsSet.add(currentList.toList())
            for (i in startIndex..nums.lastIndex) {
                currentList.add(nums[i])
                subSetsRecur(currentList, i + 1)
                currentList.remove(nums[i])
            }
        }

        subSetsRecur(mutableListOf(), 0)
        return resultsSet.toList()
    }

    // Approach 3: Same as approach 2 but also prune the branches that doesn't have to be
    // traversed, which is an optimization since the duplicates are skipped and the duplicate
    // results are no longer generated.
    // T = O(n * 2^n)
    fun subsetsWithDup(nums: IntArray): List<List<Int>> {
        nums.sort()
        val resultsSet = mutableListOf<List<Int>>()

        fun subSetsRecur(currentList: MutableList<Int>, startIndex: Int) {
            // Base case when the index goes out of bounds, the array is traversed
            if (startIndex > nums.lastIndex) {
                resultsSet.add(currentList.toList())
                return
            }
            
            // Generate a combination by including the current element
            currentList.add(nums[startIndex])
            subSetsRecur(currentList, startIndex + 1)
            currentList.remove(nums[startIndex])
            
            // Before generating a combination without including the current element,
            // also skip all the next elements until a new element that doesn't match
            // the current element is found
            var i = startIndex
            while(i + 1 <= nums.lastIndex && nums[i] == nums[i + 1]) i++

            // Generate a new combination without the current/other elements that match the current
            subSetsRecur(currentList, i + 1)
        }

        subSetsRecur(mutableListOf(), 0)
        return resultsSet
    }
}
```