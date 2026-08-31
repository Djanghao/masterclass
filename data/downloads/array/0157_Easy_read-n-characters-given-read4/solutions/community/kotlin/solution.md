# .::kotlin

**Author:** dzmtr
**Votes:** 0
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4/solutions/5295595/](https://leetcode.com/problems/read-n-characters-given-read4/solutions/5295595/)

---

```
class Solution: Reader4() {

    override fun read(buf: CharArray, n: Int): Int {
        val buffer4 = CharArray(4)
        var read = 0

        while (read < n) {
            var count = read4(buffer4)
            if (count == 0) break
            
            var i = 0
            while (i < count && read < n) 
                buf[read++] = buffer4[i++]
        }

        return read
    }
}
```