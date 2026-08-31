# 2573. Find the String with LCP

**Author:** AlexVahidoff
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-string-with-lcp/solutions/3877728/](https://leetcode.com/problems/find-the-string-with-lcp/solutions/3877728/)

---

# Intuition
To build a string, we will sequentially analyze arrays, while separately storing the next character and the next character in alphabetical order

# Approach
To check the correctness of arrays, we use the z-function

# Complexity
- Time complexity:
$$O(log(n))$$

- Space complexity:
$$O(log(n))$$

# Code
```
class Solution {
    fun findTheString(lcp: Array<IntArray>): String {
        if (lcp.size == 1 && lcp[0][0] == 0) return ""

        val result = CharArray(lcp[0].size) { _: Int ->  '#' }
        result[0] = 'a'
        var next = 'a'
        var dNext = 'a'
        for (ind in lcp.indices) {
            if (lcp[ind].last() > 1) return ""

            val arrForBuild = lcp[ind].takeLast(lcp.size - ind).toIntArray()
            arrForBuild.forEachIndexed { index, arr ->
                if (index > 0 && result[index + ind] == '#' && arr > 0) result[index + ind] = next
            }
            if (result[ind] == '#') result[ind] = next
            next = if (1 < arrForBuild.size) {
                if (arrForBuild.all { it == 0 }) {
                    next
                } else {
                    if (result[ind + 1] != '#') result[ind + 1] else {
                        if (dNext == 'z') 'a' else {
                            dNext += 1
                            dNext
                        }
                    }
                }
            } else {
                next
            }
        }
        var s = String(result)

        val length = s.length
        if (s.isEmpty()) return ""
        for (ind in lcp.indices) {
            val prefStr = if (ind == 0) s else s.takeLast(length - ind) + "#" + s
            val zArr = zFunction(prefStr)
            val zArrM = zArr.takeLast(length).toIntArray()
            zArrM[ind] = length - ind
            if (zArrM.joinToString() != lcp[ind].joinToString()) {
                s =  ""
                break
            }
        }

        return s
    }
    
    fun zFunction(s : String): IntArray {
        val n = s.length
        val zf = IntArray(n)
        var left = 0
        var right = 0
        for (i in 1 until n) {
            val min = if(right - i < zf[i - left]) right - i else zf[i - left] 
            zf[i] = if(0 > min) 0 else min
            while (i + zf[i] < n && s[zf[i]] == s[i + zf[i]]) {
                zf[i]++
            }
            if (i + zf[i] > right) {
                left = i
                right = i + zf[i]
            }
        }
        return zf
    }

}
```