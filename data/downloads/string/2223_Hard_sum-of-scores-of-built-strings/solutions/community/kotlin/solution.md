# 2223. Sum of Scores of Built Strings

**Author:** AlexVahidoff
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/3802785/](https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/3802785/)

---

# Intuition
I wanted to offer an original way for this task, respecting the linear complexity

# Approach
to comply with linear processing, intermediate results are stored in a list of date objects; for optimization, two cases are selected when the string consists of one or two letters.

# Complexity
- Time complexity:
$$O(3n)$$

- Space complexity:
$$O(2n)$$

# Code
```
class Solution {
    fun sumScores(s: String): Long {
        val n: Int = s.length
        var count = 0L
        val list = mutableListOf<Data>()

        val map = mutableMapOf<Char, Int>()
        val mapD = mutableMapOf<String, Int>()
        s.forEachIndexed { index, c ->
            map[c] = index
        }
        if (n % 2 == 0) {
            s.forEachIndexed { index, c ->
                if (index % 2 != 0) {
                    val v = s[index - 1] + c.toString()
                    mapD[v] = index
                }
            }
        }
        if (map.size == 1) {
            for (i in 1..n.toLong()) {
                count += i
            }
            return count
        }
        map.clear()
        if (mapD.size == 1) {
            for (i in 0..n.toLong() step 2) {
                count += i
            }
            return count
        }
        mapD.clear()
        count = n.toLong()

        for (index in 1 until n) {

            if (s[index] == s[0]) {
                list.add(Data(index, 0))
            }
            val remove = mutableListOf<Data>()
            list.forEach {
                if (s[index] == s[index - it.ind]) it.value += 1
                else {
                    count += it.value
                    remove.add(it)
                }
            }
            list.removeAll(remove)

        }
        list.forEach {
            count += it.value
        }
        return count
    }
    class Data (
        var ind: Int = 0,
        var value: Int = 0
    )
}
```