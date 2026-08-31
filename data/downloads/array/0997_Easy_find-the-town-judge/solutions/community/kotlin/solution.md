# Kotlin O(n) very simple solution

**Author:** Klemo1997
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-town-judge/solutions/3090862/](https://leetcode.com/problems/find-the-town-judge/solutions/3090862/)

---

# Approach
Just keep track of how many does each n trust and is trusted by. Then traverse these and try to find the judge.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    fun findJudge(n: Int, trust: Array<IntArray>): Int {
        val trustFreq = IntArray(n+1) { 0 }

        for ((from, to) in trust) {
            trustFreq[from]--
            trustFreq[to]++
        }

        for (i in 1 .. n) {
            if (trustFreq[i] == n-1) return i
        }

        return -1
    }
}
```