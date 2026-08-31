# Very easy solution in Kotlin

**Author:** zohidjonakbarov
**Votes:** 1
**Link:** [https://leetcode.com/problems/gray-code/solutions/2243431/](https://leetcode.com/problems/gray-code/solutions/2243431/)

---

```
 fun grayCode(n: Int): List<Int> {
    val result = mutableListOf<Int>()
    for (i in 0 until (1 shl n)) result.add(i xor (i shr 1))
    return result  
    }
```