# Kotlin Best Solution

**Author:** progp
**Votes:** 5
**Link:** [https://leetcode.com/problems/friends-of-appropriate-ages/solutions/4385444/](https://leetcode.com/problems/friends-of-appropriate-ages/solutions/4385444/)

---


# Code
```
class Solution {
fun numFriendRequests(ages: IntArray): Int {
    val map = IntArray(121)
    for (age in ages) map[age]++

    var res = 0
    for (i in 0..120) {
        for (j in 0..120) {
            if (!(j <= 0.5 * i + 7 || j > i || (j > 100 && i < 100))) {
                res += map[i] * map[j]
                if (i == j) res -= map[i]
            }
        }
    }

    return res
}
}
```