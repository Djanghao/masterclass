# Easy to understand Kotlin Solution

**Author:** virusvasu
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/1790353/](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/1790353/)

---

```
fun minimumSwap(s1: String, s2: String): Int {
		// not possible to make different length strings equal
        if(s1.length != s2.length) {
            return -1
        }
		// using Hint 1 : do not consider characters which are already same in both strings
		// we only need to store 1 string because if s1[i] = x then s2[i] = y and vice versa
        var tmp = ""
        for(i in s1.indices) {
            if(s1[i] != s2[i]) {
                tmp += s1[i]
            }
        }
		
		// all indices are equal
        if(tmp.isEmpty()) return 0
        val numXs = tmp.count { it == 'x' }
        val numYs = tmp.length - numXs
        var ans = 0
		// xx yy case takes 1 swap
        ans += numXs / 2
		// yy xx case takes 1 swap
        ans += numYs / 2
        val remainingXs = numXs % 2
        val remainingYs = numYs % 2
		// either x y remaining or y x remaining (not possible to make equal)
        if(remainingXs != remainingYs) {
            return -1
        }
		// xy yx case takes 2 swaps
        if((remainingXs == remainingYs) && (remainingXs == 1)) {
            ans += 2
        }
        return ans
    }
```