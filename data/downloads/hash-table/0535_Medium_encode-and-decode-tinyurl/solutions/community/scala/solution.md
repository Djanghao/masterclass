# beats 100% runtime

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/5237778/](https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/5237778/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
using mutable map

# Approach
<!-- Describe your approach to solving the problem. -->
since same object is used , we can create map of class, add the key while encoding and get the key for decoding
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(1)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(n)
# Code
```
import scala.collection.mutable
class Codec {
    // Encodes a URL to a shortened URL.
  lazy val map: mutable.Map[String, String] = mutable.HashMap()
  val tinyPrefix = "http://tinyurl.com/"

  def encode(longURL: String): String = {
    val hash = longURL.hashCode.toString
    map.put(hash, longURL)
    s"${tinyPrefix}${hash}"
  }

  // Decodes a shortened URL to its original URL.
  def decode(shortURL: String): String = {
    val suffix = shortURL.substring(tinyPrefix.length)
    map(suffix)
  }

}

/**
 * Your Codec object will be instantiated and called as such:
 * var obj = new Codec()
 * val s = obj.encode(longURL)
 * val ans = obj.decode(s)
 */
```