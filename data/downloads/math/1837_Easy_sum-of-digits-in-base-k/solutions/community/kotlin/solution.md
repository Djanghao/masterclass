# Kotlin - minimalistic

**Author:** tucux
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/1610044/](https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/1610044/)

---

It's not necessary to convert the number to a base-k external representation. We can just sum up the base-k digits as we compute them. 

```
class Solution {
    fun sumBase(n: Int, k: Int): Int {
        var n1 = n
        var res = 0
        while (n1 > 0) {
            res += n1 % k
            n1 /= k
        }
        return res
    }
}
```