# Using recursion and delimiter, beats 80 %

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-and-decode-strings/solutions/5228560/](https://leetcode.com/problems/encode-and-decode-strings/solutions/5228560/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Keep the count and delimiter as part of encoding and based on this guide decode it and using recursion keeping adding to result
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(n2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(1), no extra space for buffer , only result
# Code
```
class Codec {
  def encode(strs: List[String]): String = {
    strs.map(str => s"${str.length}#$str")
      .mkString
  }

  // Decodes a single string to a list of strings.
  def decode(s: String): List[String] = {
    get(List(), 0, s)
  }

  def get(acc: List[String], idx: Int, s: String): List[String] = {
    if (idx >= s.length)
      acc
    else {
      val splitIndx = s.indexOf("#", idx)
      val length = s.substring(idx, splitIndx).toInt
      val str = s.substring(splitIndx + 1, splitIndx + length + 1)
      get(acc :+ str, splitIndx + length + 1, s)
    }
  }
}

/**
 * Your Codec object will be instantiated and called as such:
 * var obj = new Codec()
 * val s = obj.encode(strs)
 * val ans = obj.decode(s)
 */
```