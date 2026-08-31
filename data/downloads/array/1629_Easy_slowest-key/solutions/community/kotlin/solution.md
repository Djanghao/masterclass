# O(n) Store Max

**Author:** parassidhu
**Votes:** 2
**Link:** [https://leetcode.com/problems/slowest-key/solutions/909026/](https://leetcode.com/problems/slowest-key/solutions/909026/)

---

**Idea:** Save max duration for the key and the key itself. Traverse over the releaseTimes and find the time. If `time difference == max`, key character should be max lexicographically. For instance if `a` and `b` have 10 unit time, we can use something like: `maxOf('a', 'b')`

```
    fun slowestKey(releaseTimes: IntArray, keysPressed: String): Char {
        var max = releaseTimes[0]
        var key = keysPressed[0]
        
        for (i in 1 until releaseTimes.size) {
            val diff = releaseTimes[i] - releaseTimes[i-1]
            
            if (diff >= max) {
                key = if (max != diff) keysPressed[i] else maxOf(key, keysPressed[i])
                max = diff
            }
        }
        
        return key
    }
```