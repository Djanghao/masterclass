# (0ms) The Rabin-Karp method + cunning

**Author:** sav20011962
**Votes:** 3
**Link:** [https://leetcode.com/problems/rotate-string/solutions/6000668/](https://leetcode.com/problems/rotate-string/solutions/6000668/)

---

# Approach
The Rabin-Karp method
# Complexity
![image.png](./images/0.png)
# Code
```kotlin []
class Solution {
    fun rotateString(s: String, goal: String): Boolean {
        if (s.length!=goal.length) return false
        val n = s.length
        val base = 31
        var pows = 1
        var hash_s = s[0] - 'a'
        var hash_g = goal[0] - 'a'
        var arr_s = IntArray(26); arr_s[s[0] - 'a']++
        var arr_g = IntArray(26); arr_g[goal[0] - 'a']++
        for (i in 1 until n) {
            pows = pows * base
            hash_s = hash_s * base + (s[i] - 'a')
            hash_g = hash_g * base + (goal[i] - 'a')
            arr_s[s[i] - 'a']++
            arr_g[goal[i] - 'a']++
        }
        if (!arr_s.contentEquals(arr_g)) return false
        for (i in 0 until n) {
            if (hash_s==hash_g) return true
            hash_s = (hash_s - (s[i] - 'a') * pows) * base + (s[i] - 'a')
        }
        return false
    }
}
```