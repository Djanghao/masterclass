# Kotlin - ListOf - MapOf

**Author:** ZuG9x
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/3939851/](https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/3939851/)

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
    fun longestEqualSubarray(nums: List<Int>, k: Int): Int {
        var ans = 0

        val currK = mutableListOf<Int>() // current K used of list
        val listIndexOfNum = mutableListOf<MutableList<Int>>() // index in nums of number X
        val valueToIndex = mutableMapOf<Int, Int>() // find index of number X in listIndexOfNum

        for ((idx, num) in nums.withIndex()) {
            if (!valueToIndex.containsKey(num)) {
                currK.add(0)
                listIndexOfNum.add(mutableListOf(idx))
                valueToIndex[num] = listIndexOfNum.count() - 1
                if (ans == 0) ans = 1
            } else {
                val idxOfNum = valueToIndex[num]
                listIndexOfNum[idxOfNum!!].add(idx)
                currK[idxOfNum] += idx - 1 - listIndexOfNum[idxOfNum][listIndexOfNum[idxOfNum].size - 2]
                while (currK[idxOfNum] > k) {
                    val decreaseK = listIndexOfNum[idxOfNum][1] - 1 - listIndexOfNum[idxOfNum][0]
                    currK[idxOfNum] -= decreaseK
                    listIndexOfNum[idxOfNum].removeAt(0)
                }
                
                if (listIndexOfNum[idxOfNum].count() > ans) ans = listIndexOfNum[idxOfNum].count()
            }
        }

        return ans
    }
}
```