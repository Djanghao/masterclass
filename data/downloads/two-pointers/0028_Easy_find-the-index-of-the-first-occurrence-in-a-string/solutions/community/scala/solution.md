# scala solution.

**Author:** lyk4411
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/2000109/](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/2000109/)

---


```
def strStr(haystack: String, needle: String): Int = {
    needle.isEmpty match {
      case true => 0
      case _ => {
        haystack.contains(needle) match {
          case false => -1
          case _ => haystack.sliding(needle.length, 1).zipWithIndex.filter(n => n._1 == needle).map(_._2).next
        }
      }
    }
  }
```  
  
  
  Thanks @chlr1987
  ```
  def strStr(haystack: String, needle: String): Int = {
    needle.isEmpty match {
      case true => 0
      case _ => haystack.sliding(needle.length, 1).zipWithIndex.collectFirst({ case (`needle`, y) => y }).getOrElse(-1)
    }
  }
```