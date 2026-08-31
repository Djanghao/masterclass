# Understand the tricky part

**Author:** 2pac_shakur
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/770077/](https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/770077/)

---

Yes, this needs `logn` time, so that calls to `reader.compareSub()` is reduced.

Tricky part is to understand that `l, r` and `x,y` should have equal number of elements **to get valid results** from `reader.compareSub()`.

```
    fun getIndex(reader: ArrayReader): Int {
        var (low, high) = 0 to (reader.length() - 1)
        var mid = low + (high - low) / 2
        while (low < high) {
            mid = low + (high - low) / 2
            val compare = if ((high - low) % 2 == 0) { // even elements in total, so to divide this range into two parts, include mid.
                reader.compareSub(low, mid, mid, high)
            } else reader.compareSub(low, mid, mid + 1, high) // odd elements in total, we can divide this range easily into two parts
            when(compare) 
                1  -> high = mid
                -1 -> low = mid + 1
                else -> return mid
            }
        }
        return low
    }
```

