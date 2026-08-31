# Kotlin Solution

**Author:** 3336360dhdh
**Votes:** 2
**Link:** [https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/2136924/](https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/2136924/)

---

```
class Codec() {
    val map = mutableMapOf<String, String>()
    var inc = 100

    fun encode(longUrl: String): String {
        val key = Integer.toHexString(inc++)
        map[key] = longUrl
        return "http://tinyurl.com/" + key

    }

    fun decode(shortUrl: String): String {
        val key = shortUrl.substring(shortUrl.indexOfLast { it=='/' }+1)
        return map[key]!!
    }
}
```