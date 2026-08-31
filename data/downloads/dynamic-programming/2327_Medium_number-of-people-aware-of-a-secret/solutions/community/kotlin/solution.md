# Simple Kotlin Solution || Fast & Understandable

**Author:** PoeticIvy302543
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-people-aware-of-a-secret/solutions/2233684/](https://leetcode.com/problems/number-of-people-aware-of-a-secret/solutions/2233684/)

---

**Runtime: 329 ms, faster than 100.00% of Kotlin online submissions for Number of People Aware of a Secret.
Memory Usage: 38.3 MB, less than 100.00% of Kotlin online submissions for Number of People Aware of a Secret.**

```
    fun peopleAwareOfSecret(n: Int, delay: Int, forget: Int): Int {
        val mod = 1000000007
        val peopleSecret = HashMap<Int, Int>()
        peopleSecret[0] = 1
        var active = 0L
        for (i in 1 until n) {
            var num = 0
            if (peopleSecret.containsKey(i - delay)) num = peopleSecret[i - delay]!!
            active = (num.toLong()+active)
            var f = 0
            if (peopleSecret.containsKey(i - forget)) f = peopleSecret[i - forget]!!%mod
            active -= f
            peopleSecret[i] = (active%mod).toInt()
        }

        var count = 0L
        for (i in 0 until n) {
            count += peopleSecret[i]!!
            var f = 0
            if (peopleSecret.containsKey(i - forget)) f = peopleSecret[i - forget]!!
            count -= f
        }

        return (count%mod).toInt()
    }
```