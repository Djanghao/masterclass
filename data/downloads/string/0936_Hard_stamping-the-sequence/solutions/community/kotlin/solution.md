# Greedy approach, pave with stamp target string

**Author:** rabusta
**Votes:** 0
**Link:** [https://leetcode.com/problems/stamping-the-sequence/solutions/3214367/](https://leetcode.com/problems/stamping-the-sequence/solutions/3214367/)

---

# Approach
Greedy approach, pave with stamp target string

# Complexity
- Time complexity:
$$O(s*t)$$

- Space complexity:
$$O(s)$$

# Code
```
class Solution {
    fun movesToStamp(stamp: String, target: String): IntArray {
        
        var t = target
        var tt = "".padStart(target.length, '?')
        var st = "".padStart(stamp.length, '?')
        val ans = mutableListOf<Int>()

        var found = true
        while (found) {
            found = false
            for (k in 0..stamp.length-1) {
                val sp = stamp.toCharArray()
                if (k > 0) for (c in 0..k-1) sp[c] = '?'
                for (e in stamp.length-1 downTo k) {
                    if (e < stamp.length-1) sp[e+1] = '?'
                    val s = String(sp)
                    var idx = t.indexOf(s)
                    while (idx >= 0) {
                        found = true
                        ans.add(idx)
                        t = t.replaceFirst(s, st, true)
                        idx = t.indexOf(s)
                    }
                }
            }
        }

        if (t != tt) return IntArray(0)

        ans.reverse()
        return ans.toIntArray()
    }
}
```