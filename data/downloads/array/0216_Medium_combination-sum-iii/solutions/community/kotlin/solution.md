# Kotlin backtrack, beats 94%

**Author:** rickchencoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/combination-sum-iii/solutions/4928187/](https://leetcode.com/problems/combination-sum-iii/solutions/4928187/)

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
    val ans: MutableList<List<Int>> = mutableListOf()
    val path: MutableList<Int> = mutableListOf()
    var numOfCombo = 0
    var target = 0

    fun combinationSum3(k: Int, n: Int): List<List<Int>> {
        numOfCombo = k
        target = n
        backtrack (1, 0)
        return ans
    }

    private fun backtrack(start: Int, curr: Int) {
        if (path.size == numOfCombo && curr == target) {
            ans.add(ArrayList(path))
            return
        }

        for (num in start .. 9) {
            if(curr + num <= target) {
                path.add(num)
                backtrack(num + 1, curr + num)
                path.removeAt(path.size - 1)
            } 
        }
    }
}
```